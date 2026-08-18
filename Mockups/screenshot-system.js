const puppeteer = require('puppeteer-core');
const os = require('os');
const path = require('path');

const executablePath = os.platform() === 'darwin' 
    ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    : '/usr/bin/google-chrome';

(async () => {
  console.log('Connecting to existing Chrome installation...');
  const browser = await puppeteer.launch({ executablePath, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  await page.screenshot({ path: 'dtech-fullpage.png', fullPage: true });
  
  const header = await page.$('header');
  if (header) {
    await header.screenshot({ path: 'dtech-header.png' });
  }

  const projects = await page.$('#portfolio');
  if (projects) {
    await projects.screenshot({ path: 'dtech-projects.png' });
  }
  
  await browser.close();
  console.log('Screenshots captured successfully!');
})();
