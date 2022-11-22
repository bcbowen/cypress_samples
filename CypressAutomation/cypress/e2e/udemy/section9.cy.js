/// <reference types="Cypress" />

import HomePage from './pageObjects/HomePage';
import ProductPage from './pageObjects/ProductPage';

describe('Cypress Framework, fixtures and custom commands', function () {
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
      this.homePage = new HomePage();
      this.productPage = new ProductPage();
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

  it('47-54: Customized commands for code reuse', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
    // customized command in support.command.js
    // pause method to break in debug mode:
    // cy.pause();
    this.data.productName.forEach(function (name) {
      cy.selectProduct(name);
    });
    this.productPage.getCheckoutButton().click();
    // timeout override for current scope to allow time for drop down to populate dynamizally
    Cypress.config('defaultCommandTimeout', 8000);
    cy.contains('Checkout').click();
    cy.get('#country')
      .type('India')
      .get('.suggestions > ul > li > a', { timeout: 10000 })
      .dblclick();

    cy.get('#checkbox2').click({ force: true });
    cy.get('input[type="submit"]').click();
    cy.get('.alert').should('contain.text', 'Success');
  });
});
