/// <reference types="Cypress" />

describe('Cypress Framework, fixtures and custom commands', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('Load test data from fixture', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('select').select(this.data.gender);
  });
});
