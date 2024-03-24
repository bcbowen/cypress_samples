describe('Cypress Test Framework examples', () => {
    let testUser;
    before(() => {
        cy.fixture('clients').then((data) => {
            testUser = data;
        }); 
        cy.visit('https://rahulshettyacademy.com/angularpractice'); 
    }); 

    it('Customer enters name and selects gender test', () => {
        
        cy.get('input[name="name"]:nth-child(2)').type(testUser.name); 
        cy.get('select').select(testUser.gender); 
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', testUser.name); 
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2'); 
        cy.get('#inlineRadio3').should('be.disabled'); 
    }); 



}); 