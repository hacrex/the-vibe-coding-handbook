#!/usr/bin/env node
'use strict';

const assert = require('assert');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..', 'site');
const mime = { '.css': 'text/css', '.js': 'text/javascript', '.html': 'text/html', '.xml': 'application/xml', '.txt': 'text/plain' };

function safePath(urlPath) {
  const pathname = decodeURIComponent(urlPath.split('?')[0]);
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  const resolved = path.resolve(ROOT, relative);
  assert(resolved.startsWith(ROOT + path.sep), `path escapes site root: ${urlPath}`);
  return resolved;
}

const server = http.createServer((req, res) => {
  try {
    let file = safePath(req.url || '/');
    const aliases = { '/glossary': 'glossary.html', '/catalog': 'catalog.html', '/path': 'prereqs.html', '/roadmap': 'prereqs.html', '/lesson': 'lesson.html' };
    if (!fs.existsSync(file) && aliases[req.url]) file = path.join(ROOT, aliases[req.url]);
    if (!fs.existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(fs.readFileSync(file));
  } catch (error) { res.writeHead(500); res.end(error.message); }
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
    await page.waitForSelector('#phasesGrid .toc-row');
    assert(/The Vibe Coding Handbook/i.test(await page.title()), 'homepage title missing');

    const initialTheme = await page.locator('html').getAttribute('data-theme');
    await page.locator('#themeToggle').click();
    const toggledTheme = await page.locator('html').getAttribute('data-theme');
    assert.notStrictEqual(initialTheme, toggledTheme, 'theme toggle did not change theme');

    const search = page.locator('#tocSearch, input[type="search"]').first();
    if (await search.count()) {
      await search.fill('security');
      assert(await page.locator('#phasesGrid .toc-row').count() > 0, 'search removed all matching results');
    }

    await page.goto(`http://127.0.0.1:${port}/catalog.html`, { waitUntil: 'networkidle' });
    assert(await page.locator('body').innerText().then(text => /catalog|lesson|search/i.test(text)), 'catalog did not render expected content');

    await page.goto(`http://127.0.0.1:${port}/lesson.html?path=00-introduction`, { waitUntil: 'networkidle' });
    assert(await page.locator('body').innerText().then(text => /Introduction|lesson|welcome/i.test(text)), 'lesson route did not render expected content');
    console.log('Browser smoke tests passed for homepage, theme toggle, search, catalog, and lesson routes.');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => {
  console.error(`Browser smoke test failed: ${error.message}`);
  server.close();
  process.exit(1);
});
