const puppeteer = require('puppeteer-core');
const os = require('os');
const path = require('path');

// Try Safari for screenshots if Chrome is missing
(async () => {
  try {
    // We will just use the default macOS screenshot utility via command line
    console.log("Using macOS native screencapture");
  } catch (e) {
    console.error(e);
  }
})();
