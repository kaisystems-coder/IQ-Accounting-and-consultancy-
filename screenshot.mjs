import { createRequire } from 'node:module';
import { mkdirSync, readdirSync } from 'node:fs';

const require = createRequire('C:/Users/kavee/AppData/Local/Temp/puppeteer-test/package.json');
const puppeteer = require('puppeteer');

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3];

const dir = './temporary screenshots';
mkdirSync(dir, { recursive: true });
const next =
  readdirSync(dir)
    .map((f) => f.match(/^screenshot-(\d+)/))
    .filter(Boolean)
    .reduce((max, m) => Math.max(max, Number(m[1])), 0) + 1;
const file = `${dir}/screenshot-${next}${label ? '-' + label : ''}.png`;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
await new Promise((r) => setTimeout(r, 1500));

// Scroll through the whole page so scroll-triggered reveals fire, then return to top.
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = () => {
      y += 600;
      window.scrollTo(0, y);
      if (y < document.documentElement.scrollHeight + 1200) setTimeout(step, 120);
      else resolve();
    };
    step();
  });
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 1500));

await page.screenshot({ path: file, fullPage: true });
await browser.close();
console.log('Saved', file);
