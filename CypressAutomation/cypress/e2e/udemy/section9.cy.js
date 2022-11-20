/// <reference types="Cypress" />

describe('Cypress Framework, fixtures and custom commands', function () {
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('45: Load test data from fixture', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('select').select(this.data.gender);
  });

  it('46: Validate attribute properties and behavior', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('input[name="name"]:nth-child(1)').should(
      'have.value',
      this.data.name
    );
    cy.get('input[name="name"]:nth-child(2)').should(
      'have.attr',
      'minlength',
      '2'
    );
    cy.get('#inlineRadio3').should('be.disabled');
  });

  it('47: Customized commands for code reuse', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
    // customized command in support.command.js
    cy.selectProduct('Blackberry');
  });
});
