import {defineConfig} from '@playwright/test';
import {existsSync} from 'node:fs';

// Usa o Chrome instalado no Windows quando existir; em outros sistemas, o Chromium do Playwright.
const windowsChrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const executablePath = process.env.CHROME_PATH || (existsSync(windowsChrome) ? windowsChrome : undefined);

export default defineConfig({
  testDir:'./tests',
  timeout:90000,
  workers:1,
  use:{baseURL:'http://127.0.0.1:4322',launchOptions:executablePath ? {executablePath} : {},headless:true},
  webServer:{command:'npm run preview -- --port 4322',url:'http://127.0.0.1:4322',reuseExistingServer:true,timeout:120000},
  reporter:'list'
});
