/// <reference types="Cypress" />

describe('Section 7: alerts, child windows, etc..', function () {
  it('alert and confirm sample tests', function () {
    // alerts and confirms are automatically handled
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();

    // listen for browser alert event
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });
  });
});
