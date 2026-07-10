#!/usr/bin/env node
// Expo's plain `expo export -p web` (no expo-router) always emits root-absolute asset
// paths ("/_expo/...", "/assets/..."), which 404 on a GitHub Pages *project* site
// (served at /<repo-name>/, not /). This rewrites those literal path prefixes in the
// exported HTML/JS so the bundle works under a sub-path.
const fs = require('fs');
const path = require('path');

const [, , base, distDirArg] = process.argv;
if (!base) {
  console.error('Usage: fix-storybook-base-path.js </repo-name> [dist-dir]');
  process.exit(1);
}

const distDir = path.resolve(distDirArg ?? path.join(__dirname, '..', 'dist-storybook'));

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      const rewritten = content
        .replaceAll('"/_expo/', `"${base}/_expo/`)
        .replaceAll('"/assets/', `"${base}/assets/`)
        .replaceAll('href="/favicon.ico"', `href="${base}/favicon.ico"`);
      if (rewritten !== content) {
        fs.writeFileSync(full, rewritten);
      }
    }
  }
}

walk(distDir);
console.log(`Rewrote asset paths under ${base} in ${distDir}`);
