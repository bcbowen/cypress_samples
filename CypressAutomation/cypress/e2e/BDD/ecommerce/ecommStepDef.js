import cypress from 'cypress';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../0-udemy/pageObjects/HomePage';
import ProductPage from '../../0-udemy/pageObjects/ProductPage';

const homePage = new HomePage();
const productPage = new ProductPage();

Given('I open ecomm page', () => {
  cy.visit(cypress.env('url' + '/angularpractice/'));
});

When('I add items to cart', function () {
  // can't use arrow function with hooks data
  homePage.getShopTab.click();
  this.data.productName.forEach(function (element) {
    cy.selectProduct(element);
  });
  productPage.checkOutButton.click();
});

And('Validate the total prices', () => {
  let total = 0;
  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
    const text = $el.text();
    const amount = text.split(' ')[1].trim();
    total += Number(amount);
  });

  let sum = 0;
  cy.get('h3 strong').then(function ($el) {
    const sumText = $el.text().split(' ')[1].trim();
    const sum = Number(sumText);
    expect(sum).to.equal(total);
  });
});

Then('Select country, submit and verify thanks dude', () => {
  cy.contains('Checkout').click();
  cy.get('#country')
    .type('India')
    .get('.suggestions > ul > li > a', { timeout: 10000 })
    .dblclick();

  cy.get('#checkbox2').click({ force: true });
  cy.get('input[type="submit"]').click();
  cy.get('.alert').should('contain.text', 'Success');
});
