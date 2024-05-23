
import { Given, When, Then,And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m not logged in', () => {
    cy.get('.nav-link').contains('Login');
});
And('There is a created shelter with name {string} and email {string} and mobile {string}', (username, email, mobile) => {
    cy.request('POST', 'http://localhost:8080/shelters', {username, email,mobile})
});
Given('I\'m in the homepage', () => {
    cy.visit('http://localhost:4200');
});
Given('I log in as {string} with password {string}', (username, password) => {
    cy.get('.nav-link').contains('Login').click();
    cy.get('#username').type(username).blur();
    cy.get('#password').type(password).blur();
    cy.get('button').contains('Submit').click();
});
Given ('I am in shelters page', () => {
    cy.visit('http://localhost:4200/shelters');
});
Then('I\'m logged in as user {string}', (username) => {
    cy.get('#currentUser')
      .invoke('text')
      .should('contains', username);
});
When('I click the {string} button', (label) => {
    cy.get('button').contains(label).click();
});
Then('I do not see shelter with mobile {string}', (phone) => {
    // List all available shelters
    cy.get('div.card.mb-1').then($shelters => {
        // Log all the shelters to the console
        cy.wrap($shelters).each(($shelter, index) => {
            cy.log(`Shelter ${index + 1}: ${$shelter.text()}`);
        });

        // Verify if the shelter with the given phone number exists
        cy.get('div.card.mb-1').contains(phone).should('not.exist');
    });
});
When('I click the {string} button', (label) => {
    cy.get('button').contains(label).click();
});
When('I fill the form with', (table: DataTable) => {
    table.rows().forEach((pair: string[]) =>
      cy.get('#' + pair[0]).type(pair[1]).blur() );
 });
 Then('Shelter with phone number {string} is created', (phone) => {
    // List all available shelters
    cy.get('div.card.mb-1').then($shelters => {
        // Log all the shelters to the console
        cy.wrap($shelters).each(($shelter, index) => {
            cy.log(`Shelter ${index + 1}: ${$shelter.text()}`);
        });

        // Verify if the shelter with the given phone number exists
        cy.get('div.card.mb-1').contains(phone).should('exist');
    });
});
Given ('I am in delete shelter page', () => {
    cy.visit('http://localhost:4200/shelters');
});