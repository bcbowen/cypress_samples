/// <reference types="Cypress" />

import HomePage from './pageObjects/HomePage';
import ProductPage from './pageObjects/ProductPage';

describe('Checkout tests', function () {
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
      this.homePage = new HomePage();
      this.productPage = new ProductPage();
    });
  });


  it('55 - 56: Dynamically total values', function () {
    cy.visit(`${Cypress.env('url')}/angularpractice/shop`);
    // customized command in support.command.js
    // pause method to break in debug mode:
    // cy.pause();
    this.data.productName.forEach(function (name) {
      cy.selectProduct(name);
    });
    this.productPage.getCheckoutButton().click();
    let total = 0; 
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const text = $el.text(); 
        const amount = text.split(' ')[1].trim();
        total += Number(amount);
    });

    let sum = 0; 
    cy.get('h3 strong').then(function($el){
        const sumText = $el.text().split(' ')[1].trim();
        const sum = Number(sumText);
        expect(sum).to.equal(total);
    });

  });
});
