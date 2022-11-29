/// <reference Types="Cypress" />

describe('Mocking Http requests/responses (XHR testing)', function () {
  it('77: Mock response test', function () {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo');
    cy.intercept(
      {
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: 'Rest Assured with Java',
            isbn: 'RSU',
            aisle: '2301',
          },
        ],
      }
    ).as('bookretrievals');
    cy.get("button[class='btn btn-primary']").click();
    cy.wait('@bookretrievals');
    cy.get('p').should('have.text', 'Oops only 1 Book available');
  });
});
