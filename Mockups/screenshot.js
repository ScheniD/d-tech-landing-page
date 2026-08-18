const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Wait for the local server to be ready and load the page
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  // Screenshot Full Page
  await page.screenshot({ path: 'dtech-fullpage.png', fullPage: true });
  
  // Screenshot Header
  const header = await page.$('header');
  if (header) {
      await header.screenshot({ path: 'dtech-header.png' });
  }

  // Screenshot Projects
  const projects = await page.$('#portfolio');
  if (projects) {
      await projects.screenshot({ path: 'dtech-projects.png' });
  }
  
  // Screenshot Hero Area
  const hero = await page.$('.hero');
  if (hero) {
      await hero.screenshot({ path: 'dtech-hero.png' });
  }

  await browser.close();
  console.log("Screenshots captured successfully!");
})();
