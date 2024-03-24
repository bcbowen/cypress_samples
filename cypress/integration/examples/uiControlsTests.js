import 'cypress-iframe';

describe('Sample tests using ui controls', () => {
    it('Checkbox example', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', 'option1'); 
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked'); 
        // check multiple checkboxes: 
        cy.get('input[type="checkbox"]').check(['option2', 'option3']); 
    }); 

    it('Dropdown example', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        cy.get("select").select('option2').should('have.value', 'option2'); 
    }); 

    it('Editbox example', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        cy.get("#autocomplete").type('Ind'); 
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text == 'India'){
                // had to wrap the $el to resolve the promise, but the India still isn't selected like in the old demo
                $cy.wrap($el).click(); 
            }
        });
        // following assertion fails because demo code is broken
        cy.get("#autocomplete").should('have.value', 'India'); 
    }); 

    it('Hide textbox sample', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        cy.get('#displayed-text').should('be.visible'); 
        cy.get('#hide-textbox').click(); 
        cy.get('#displayed-text').should('not.be.visible'); 
        cy.get('#show-textbox').click(); 
        cy.get('#displayed-text').should('be.visible'); 
        
    }); 

    it('Radio button sample', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        cy.get('[value="radio2"]').check().should('be.checked'); 
       
    }); 

    it('Confirm sample', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        cy.get('#alertbtn').click(); 
        cy.get('#confirmbtn').click(); 
        cy.on('window:alert', (str) => {
            // mocha assertion
            expect(str).to.equal("Hello , share this practice page and share your knowledge"); 
        }); 
        cy.on('window:confirm', (str) => {
            // mocha assertion
            expect(str).to.equal("Hello , Are you sure you want to confirm?"); 
        }); 
       
    }); 

    it('Table sample', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        // iterate through each row and get the amount from the cell next to the description
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text(); 
            if (text.includes("Python")) {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text(); 
                    expect(priceText).to.equal('25'); 
                }); 
            }
        }); 
      
    }); 

    it('Frame sample', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/"); 
        cy.frameLoaded('#courses-iframe'); 
        
        cy.iframe().find('a[href*="mentorship"]').eq(0).click(); 
        cy.wait(5000); 
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2); 

        
    }); 

    it('Calendar sample', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers"); 
        const now = new Date(); 
        cy.get('.react-date-picker__calendar-button').click(); 
        cy.get('.react-calendar__navigation__label').click(); 
        cy.get('.react-calendar__navigation__label').click(); 
        cy.contains('button', now.getFullYear()).click(); 
        cy.get('.react-calendar__year-view__months__month').eq(now.getMonth()).click(); 
        cy.contains("abbr", now.getDate()).click(); 

        cy.get('.react-date-picker__inputGroup__month').should('have.value', now.getMonth() + 1); 
        cy.get('.react-date-picker__inputGroup__day').should('have.value', now.getDate()); 
        cy.get('.react-date-picker__inputGroup__year').should('have.value', now.getFullYear()); 
    }); 
}); 