const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
