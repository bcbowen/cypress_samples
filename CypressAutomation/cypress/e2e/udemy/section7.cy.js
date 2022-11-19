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

    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });
  });

  it('multi tab workaround sample', function () {
    // remove attribute to open in new window, then click, which will open link in same window.
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'rahulshettyacademy');
    cy.go('back');
  });
});
