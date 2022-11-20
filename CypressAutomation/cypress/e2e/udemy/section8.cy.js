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

  /*
  

  it('Handling Web Tables sample', function () {
    // test case: master selenium automation in python price should be 25
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes('Python')) {
        cy.get('tr td:nth-child(3)')
          .eq(index)
          .then(function (price) {
            expect(price.text()).to.equal('25');
          });
      }
    });
  });

  it('Mouseover sample: Show element and click', function () {
    // test case: mouseover element and click link on popup.
    // uses jQuery invoke to call show
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
  });

  it('Mouseover sample: Test invisible element', function () {
    // test case: click invisible element
    // use 'force' since by default it won't be clicked
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'top');
  });
  */
});
