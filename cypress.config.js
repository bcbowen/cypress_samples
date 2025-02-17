const { defineConfig } = require("cypress");

module.exports = defineConfig({
  environment: "QA",
  url: {
    automation: 'https://www.rahulshettyacademy.com/AutomationPractice/'
  },
  chromeWebSecurity: false, 
  defaultCommandTimeout: 8000, 
  pageLoadTimeout: 30000, 

  e2e: {
    setupNodeEvents(on, config) {
      //return require('./cypress/')(); 
    },
    specPattern: 'cypress/integration/examples/'
  },
});
