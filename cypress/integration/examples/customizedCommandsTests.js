describe('Example of using custom cypress commands', () => {
    it('Navigate to shop link to show custom commands', ()  => {
        cy.visit('https://rahulshettyacademy.com/angularpractice'); 
        cy.get(':nth-child(2) > .nav-link').click(); 
        // call custom command
        cy.selectProduct("Blackberry"); 
    }); 
}); 