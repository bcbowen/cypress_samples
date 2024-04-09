describe('Example of intercepting http calls for api testing', () => {
    
    it('Correct message displayed when only one book is returned', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/"); 
        cy.intercept({
            method: 'GET', 
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200, 
            body: [{
                "book_name": "RestAssured with Java",
                "isbn": "yada232",
                "aisle": "2301"
            }]
        }).as('booksReturned'); 
        cy.get("button[class='btn btn-primary']").click(); 
        cy.wait('@booksReturned').then(({request, response}) => {
            cy.get('tr').should('have.length', response.body.length + 1); 
        }); 
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    }); 
    
}); 