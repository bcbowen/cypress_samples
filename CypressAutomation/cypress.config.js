const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'u7ptn1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url: 'https://rahulshettyacademy.com'
  }
});
