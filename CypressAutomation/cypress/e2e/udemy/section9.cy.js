/// <reference types="Cypress" />

import HomePage from './pageObjects/HomePage';

describe('Cypress Framework, fixtures and custom commands', function () {
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
      this.homePage = new HomePage();
    });
  });

  it('45: Load test data from fixture', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    this.homePage.getEditBox().type(this.data.name);
    this.homePage.getGender().select(this.data.gender);
  });

  it('46: Validate attribute properties and behavior', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    this.homePage.getEditBox().type(this.data.name);
    this.homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    this.homePage.getEditBox().should('have.attr', 'minlength', '2');
    this.homePage.getEntrepreneurRadio().should('be.disabled');
  });

  it('47: Customized commands for code reuse', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
    // customized command in support.command.js
    // pause method to break in debug mode:
    // cy.pause();
    this.data.productName.forEach(function (name) {
      cy.selectProduct(name);
    });
  });
});
