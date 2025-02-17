import HomePage from "../../support/pageObjects/HomePage";

describe('Cypress Test Framework examples', () => {
    let testUser;
    let homePage; 
    before(() => {
        cy.fixture('clients').then((data) => {
            testUser = data;
        }); 
        homePage = new HomePage(); 
        cy.visit(homePage.AngularPracticeUrl);
    }); 

    it('Customer enters name and selects gender test', () => {
        cy.getConfig('environment').then((env) => {
            cy.log(env); // Logs "QA"
        });
        cy.getConfig('url.automation').then((automationUrl) => {
            cy.log(automationUrl); // Logs "QA"
        });
        homePage.getEditBox().type(testUser.name);
        homePage.getGender().select(testUser.gender); 
        homePage.getTwoWayDataBinding().should('have.value', testUser.name); 
        homePage.getEditBox().should('have.attr', 'minlength', '2'); 
        homePage.getEntrepreneurRadioButton().should('be.disabled'); 
    }); 



}); 