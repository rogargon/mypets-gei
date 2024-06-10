import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

function loginAsUser(username: string, password: string) {
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type(username).blur();
  cy.get('#password').type(password).blur();
  cy.get('button').contains('Submit').click();
}

function fillPetForm(table: DataTable) {
  table.rows().forEach((pair: string[]) => {
    cy.get(`input[placeholder="Enter pet ${pair[0]} here"]`).type(pair[1]).blur();
  });
}

Given('I\'m in the homepage', () => {
  cy.visit('http://localhost:4200');
});

Given('I log in as {string} with password {string}', (username, password) => {
  loginAsUser(username, password);
});

Then('I\'m logged in as user {string}', (username) => {
  cy.get('#currentUser')
    .invoke('text')
    .should('contains', username);
});

Given('There is a registered admin with name {string} and password {string} and email {string}', (username, password, email) => {
  cy.request('POST', 'http://localhost:8080/users', { username, password, email, role: 'admin' });
});

Given('I am in pets page', () => {
  cy.visit('http://localhost:4200/pets-grid');
});

When('I click the {string} button', (label) => {
  cy.get('button').contains(label).click();
});

When('I fill the form with', (table: DataTable) => {
  fillPetForm(table);
});

Then('Pet with name {string} is created', (name) => {
  cy.get('app-pet').contains(name).should('exist');
});

Then('I see an alert with message {string}', (message) => {
  cy.on('window:alert', (alertMessage) => {
    expect(alertMessage).to.equal(message);
  });
});

Then('I attempt to click the {string} button', (label) => {
  cy.get('button').contains(label).click({ force: true });
});

Then('I verify the {string} button is disabled', (label) => {
  cy.get('button').contains(label).should('be.disabled');
});