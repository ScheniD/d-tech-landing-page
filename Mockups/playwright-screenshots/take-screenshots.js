const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  console.log('Navigating to website...');
  await page.goto('https://dtechsolutions.eu', { waitUntil: 'networkidle' });
  
  const downloadsDir = '/Users/dominik/Downloads';
  
  console.log('Taking full page screenshot...');
  await page.screenshot({ path: path.join(downloadsDir, 'dtech-fullpage.png'), fullPage: true });
  
  console.log('Taking header/hero screenshot...');
  const hero = await page.locator('.hero, header').first();
  if (await hero.count() > 0) {
    await hero.screenshot({ path: path.join(downloadsDir, 'dtech-header.png') });
  } else {
    await page.screenshot({ path: path.join(downloadsDir, 'dtech-header.png'), clip: { x: 0, y: 0, width: 1920, height: 900 } });
  }

  console.log('Taking projects/portfolio screenshot...');
  const projects = await page.locator('#portfolio, .portfolio, #projekte').first();
  if (await projects.count() > 0) {
    await projects.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Wait for images to load after scroll
    await projects.screenshot({ path: path.join(downloadsDir, 'dtech-projects.png') });
  }
  
  await browser.close();
  console.log('Done! Screenshots saved to Downloads folder.');
})();
