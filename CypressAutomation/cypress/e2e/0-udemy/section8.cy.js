/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';

describe('Section 8: more on frames and child windows', function () {
  it('39: Get href attribute and navigate to url', function () {
    // use jQuery prop() to get value of href attribute
    // can't do this if the url link has a different domain, will error
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#opentab').then(function (el) {
      const url = el.prop('href');
      cy.visit(url);
    });
  });

  it('40: handling frames', function () {
    // need to install module: 'npm install -D cypress-iframe'
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.wait(300);
    cy.iframe().find('h1.pricing-title').should('have.length', 2);
  });
});
