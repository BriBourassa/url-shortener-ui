describe('Main spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: "example.json"
    })
    cy.visit('http://localhost:3000/')
  })

  it.skip('should display the title upon loading the main page', () => {
    cy.get('h1').should('exist').should('be.visible') 
      .contains('URL Shortener')
  })

  it.skip('should display the already made URL card on the main page', () => {
    cy.get('.url').should('have.length', 2)
      .get('h3').contains('Awesome TEST photo')
    cy.get(':nth-child(2) > h3').contains('Awesome TEST photo NUMBER TWO!')
  })

  it.skip('should display the form on the main page', () => {
    cy.get('input[type="text"]').eq(0).should('be.visible')
    cy.get('input[type="text"]').eq(1).should('be.visible')
    cy.get('button').eq(0).contains('Shorten Please!')
  })

  it.skip('should display the user-input in the inpit fields', () => {
    cy.get('input[type="text"]').eq(0).type('hello!')
      .should('have.value', 'hello!')
    cy.get('input[type="text"]').eq(1).type('websitedotcom!')
      .should('have.value', 'websitedotcom!')
  })

  it('should display the new shortened url when button clicked', ()=> {
    cy.get('input[type="text"]').eq(0).type('hello!')
      .should('have.value', 'hello!')
    cy.get('input[type="text"]').eq(1).type('websitedotcom!')
      .should('have.value', 'websitedotcom!')
    cy.get('button').eq(0).click()
    cy.get('.url').should('have.length', 3)
      .get('.url').eq(2).contains('hello!')
  })

})