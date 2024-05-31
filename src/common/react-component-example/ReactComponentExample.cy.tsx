import React from 'react'
import ReactComponentExample from './ReactComponentExample'

describe('<ReactComponentExample />', () => {
  it('mount status', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReactComponentExample />)
    cy.get('[data-testid="mount-status"]').contains('Did mount');
    cy.get('[data-testid="mount-status"]').contains('ja');
  })

  it('click count', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReactComponentExample />)
    cy.get('[data-testid="count-button"]').contains('(0)');
    cy.get('[data-testid="count-button"]').click();
    cy.get('[data-testid="count-button"]').contains('(1)');
    cy.get('[data-testid="clear-button"]').click();
    cy.get('[data-testid="count-button"]').contains('(0)');
  })
})

