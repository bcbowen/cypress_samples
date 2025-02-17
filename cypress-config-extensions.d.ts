/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        getConfig(key: string): any;
    }
}


