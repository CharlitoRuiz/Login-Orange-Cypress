///<reference types="cypress" />
import datos from '../fixtures/datos.json';

/* A variable declaration. */
let userName = datos.username, password = datos.pass, searchUser = datos.searchUser;

describe('empty spec', () => {
  it('Ingresar al sitio', () => {
        // Command de cypress
    cy.ingresarURL('https://opensource-demo.orangehrmlive.com/');
    cy.login(userName, password);

    cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible');
    cy.get('#menu_admin_viewAdminModule > b').click();
    cy.get('#searchSystemUser_userName').type(searchUser);
    cy.get('#searchBtn').click();
    cy.get('td').should('contain', searchUser);
    cy.get('.odd > :nth-child(4)').should('not.have.value', "Floris Hooijmans");
  })
})