const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 120000,
    blockHosts: ['*.backtrace.io']
  }
})
