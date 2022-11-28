const { defineConfig } = require('cypress');

//const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 'u7ptn1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on('file:preprocessor', cucumber());
    },
  },
  env: {
    url: 'https://rahulshettyacademy.com',
  },
});
