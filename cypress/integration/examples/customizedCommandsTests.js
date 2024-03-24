import HomePage from "../../support/pageObjects/HomePage";

describe('Example of using custom cypress commands', () => {
    let testUser;
    let homePage; 
    before(() => {
        homePage = new HomePage(); 
        cy.visit(homePage.AngularPracticeUrl); 
        cy.fixture('clients').then((data) => {
            testUser = data;
        }); 
    }); 

    it('Navigate to shop link to show custom commands', ()  => {
        homePage.getShopTab().click(); 
        //cy.get(':nth-child(2) > .nav-link').click(); 
        // call custom command
        testUser.products.forEach((product) => {
            cy.selectProduct(product);     
        }); 

    }); 
}); 