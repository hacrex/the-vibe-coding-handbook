#!/usr/bin/env node
'use strict';

const assert = require('assert');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'site');
const routes = ['/', '/index.html', '/catalog.html', '/glossary.html', '/prereqs.html', '/lesson.html', '/data.js', '/style.css', '/feed.xml', '/sitemap.xml', '/robots.txt'];
const mime = {
  '.css': 'text/css', '.js': 'text/javascript', '.html': 'text/html', '.xml': 'application/xml', '.txt': 'text/plain'
};

function safePath(urlPath) {
  const pathname = decodeURIComponent(urlPath.split('?')[0]);
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  const resolved = path.resolve(ROOT, relative);
  assert(resolved === ROOT || resolved.startsWith(ROOT + path.sep), `path escapes site root: ${urlPath}`);
  return resolved;
}

const server = http.createServer((req, res) => {
  try {
    let file = safePath(req.url || '/');
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      if (req.url === '/glossary') file = path.join(ROOT, 'glossary.html');
      else if (req.url === '/catalog') file = path.join(ROOT, 'catalog.html');
      else if (req.url === '/path' || req.url === '/roadmap') file = path.join(ROOT, 'prereqs.html');
      else if (req.url === '/lesson') file = path.join(ROOT, 'lesson.html');
    }
    if (!fs.existsSync(file)) {
      res.writeHead(404); return res.end('Not found');
    }
    res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(fs.readFileSync(file));
  } catch (error) {
    res.writeHead(500); res.end(error.message);
  }
});

function request(port, route) {
  return new Promise((resolve, reject) => {
    http.get({ hostname: '127.0.0.1', port, path: route }, response => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', chunk => { body += chunk; });
      response.on('end', () => resolve({ status: response.statusCode, body, headers: response.headers }));
    }).on('error', reject);
  });
}

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  try {
    for (const route of routes) {
      const response = await request(port, route);
      assert.strictEqual(response.status, 200, `${route} returned ${response.status}`);
      assert(response.body.length > 0, `${route} returned an empty response`);
    }
    const index = await request(port, '/');
    assert(/The Vibe Coding Handbook/i.test(index.body), 'homepage title is missing');
    const data = await request(port, '/data.js');
    assert(/var PHASES\s*=/.test(data.body), 'generated phase data is missing');
    const glossary = await request(port, '/glossary');
    assert(/Glossary/i.test(glossary.body), 'friendly glossary route is not working');
    console.log(`Smoke tests passed for ${routes.length} routes.`);
  } finally {
    server.close();
  }
})().catch(error => {
  console.error(`Smoke test failed: ${error.message}`);
  server.close();
  process.exit(1);
});
