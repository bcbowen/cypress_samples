describe('Test suite', () => {
    it('Product Tests', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/'); 
        cy.get('.search-keyword').type('ca');
        cy.wait(1000);
        
        // following fails, hidden .product outside of .products
        // cy.get('.product').should('have.length', 4); 

        // visible only: 
        cy.get('.product:visible').should('have.length', 4); 

        // alias (.as)
        cy.get('.products').as('productLocator');
        // parent child chaining - belonging to parent only: 
        cy.get('@productLocator').find('.product').should('have.length', 4); 

        // click 2nd add button (flaky - depends on index being same)
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click(); 

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const name = $el.find('h4.product-name').text();
            if (name.includes('Cashew')){
                // wrap resolves the promise before clicking
                cy.wrap($el.find('button')).click(); 
            }
        }); 

    }); 
}); 