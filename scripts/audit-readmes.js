#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const failures = [];
const warnings = [];

function rel(file) {
  return path.relative(ROOT, file) || '.';
}

function reportFailure(file, line, message) {
  failures.push(`${rel(file)}${line ? `:${line}` : ''}: ${message}`);
}

function reportWarning(file, line, message) {
  warnings.push(`${rel(file)}${line ? `:${line}` : ''}: ${message}`);
}

function listReadmes(dir) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'site') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...listReadmes(full));
    else if (entry.name === 'README.md') found.push(full);
  }
  return found;
}

function stripCodeBlocks(text) {
  return text.replace(/^```[\s\S]*?^```\s*$/gm, match => match.split('\n').map(() => '').join('\n'));
}

function checkMarkdown(file) {
  const original = fs.readFileSync(file, 'utf8');
  const text = stripCodeBlocks(original);
  const lines = original.split('\n');
  let fenceCount = 0;
  for (const line of lines) if (/^\s*```/.test(line)) fenceCount++;
  if (fenceCount % 2 !== 0) reportFailure(file, '', 'unclosed fenced code block');

  const headings = [];
  const contentLines = text.split('\n');
  for (let i = 0; i < contentLines.length; i++) {
    const match = contentLines[i].match(/^(#{1,6})\s+(.+?)\s*#*$/);
    if (!match) continue;
    const level = match[1].length;
    headings.push({ level, line: i + 1 });
    if (headings.length > 1 && level > headings[headings.length - 2].level + 1) {
      reportWarning(file, i + 1, `heading jumps from H${headings[headings.length - 2].level} to H${level}`);
    }
  }
  if (!headings.length) reportFailure(file, '', 'README has no headings');

  const linkPattern = /!?(?:\[[^\]]*\])\(([^)]+)\)/g;
  let match;
  while ((match = linkPattern.exec(text))) {
    const raw = match[1].trim().replace(/^<|>$/g, '');
    if (!raw || /^(?:https?:|mailto:|#|data:|javascript:)/i.test(raw)) continue;
    const target = decodeURIComponent(raw.split('#', 1)[0].split('?', 1)[0]);
    if (!target || target.includes('<') || target.includes('>')) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) {
      const line = original.slice(0, match.index).split('\n').length;
      reportFailure(file, line, `broken relative link: ${raw}`);
    }
  }

  const stalePatterns = [
    /https?:\/\/github\.com\/yourusername\//i,
    /https?:\/\/example\.com/i,
    /\bTODO\b|\bFIXME\b/,
  ];
  for (let i = 0; i < lines.length; i++) {
    if (stalePatterns.some(pattern => pattern.test(lines[i]))) {
      reportWarning(file, i + 1, 'contains a placeholder or unresolved maintenance marker');
    }
  }
}

function checkSectionCatalog() {
  const sectionDirs = fs.readdirSync(ROOT, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && /^\d{2}-/.test(entry.name))
    .map(entry => entry.name)
    .sort();
  const expected = Array.from({ length: 46 }, (_, i) => `${String(i).padStart(2, '0')}-`);
  if (sectionDirs.length !== expected.length) {
    reportFailure(path.join(ROOT, 'README.md'), '', `expected 46 numbered sections, found ${sectionDirs.length}`);
  }
  for (let i = 0; i < expected.length; i++) {
    if (!sectionDirs[i] || !sectionDirs[i].startsWith(expected[i])) {
      reportFailure(path.join(ROOT, 'README.md'), '', `missing or misordered section ${expected[i]}*`);
    }
  }
  for (const dir of sectionDirs) {
    const readme = path.join(ROOT, dir, 'README.md');
    if (!fs.existsSync(readme)) reportFailure(readme, '', 'numbered section is missing README.md');
  }
}

function checkSiteHtml() {
  const htmlFiles = fs.readdirSync(path.join(ROOT, 'site'))
    .filter(name => name.endsWith('.html'))
    .map(name => path.join(ROOT, 'site', name));
  for (const file of htmlFiles) {
    const text = fs.readFileSync(file, 'utf8');
    if (!/<html\b[^>]*\blang=/i.test(text)) reportFailure(file, '', 'HTML document is missing lang attribute');
    if (!/<title>[^<]+<\/title>/i.test(text)) reportFailure(file, '', 'HTML document is missing a non-empty title');
    if (!/<meta\b[^>]*name=["']description["']/i.test(text)) reportWarning(file, '', 'HTML document is missing meta description');
    for (const match of text.matchAll(/<img\b([^>]*)>/gi)) {
      if (!/\balt\s*=\s*["'][^"']*["']/i.test(match[1])) {
        const line = text.slice(0, match.index).split('\n').length;
        reportFailure(file, line, 'image is missing alt attribute');
      }
    }
  }
}

for (const file of listReadmes(ROOT)) checkMarkdown(file);
checkSectionCatalog();
checkSiteHtml();

console.log(`README files audited: ${listReadmes(ROOT).length}`);
console.log(`Warnings: ${warnings.length}`);
for (const warning of warnings.slice(0, 80)) console.log(`WARN ${warning}`);
if (warnings.length > 80) console.log(`WARN ... ${warnings.length - 80} more`);
if (failures.length) {
  console.error(`Failures: ${failures.length}`);
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}
console.log('Audit passed.');
