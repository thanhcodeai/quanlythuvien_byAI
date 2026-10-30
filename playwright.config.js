import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests/browser',use:{launchOptions:{executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium'},baseURL:'http://127.0.0.1:3000'},webServer:{command:'npm start',url:'http://127.0.0.1:3000',reuseExistingServer:!process.env.CI},reporter:'list'});
