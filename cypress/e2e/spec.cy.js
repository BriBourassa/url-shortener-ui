describe('Main spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: "example.json"
    }).intercept('POST', 'http://localhost:3001/api/v1/urls', {
      fixture: "postData.json"
    })
    cy.visit('http://localhost:3000/')
  })

  it('should display the title upon loading the main page', () => {
    cy.get('h1').should('exist').should('be.visible') 
      .contains('URL Shortener')
  })

  it('should display the already made URL card on the main page', () => {
    cy.get('.url').should('have.length', 2)
      .get('h3').contains('Awesome TEST photo')
    cy.get(':nth-child(2) > h3').contains('Awesome TEST photo NUMBER TWO!')
  })

  it('should display the form on the main page', () => {
    cy.get('input[type="text"]').eq(0).should('be.visible')
    cy.get('input[type="text"]').eq(1).should('be.visible')
    cy.get('button').eq(0).contains('Shorten Please!')
  })

  it('should display the user-input in the inpit fields', () => {
    cy.get('input[type="text"]').eq(0).type('hello!')
      .should('have.value', 'hello!')
    cy.get('input[type="text"]').eq(1).type('websitedotcom!')
      .should('have.value', 'websitedotcom!')
  })

  it('should display the new shortened url when button clicked', ()=> {
    cy.get('input[type="text"]').eq(0).type('hello!')
      .should('have.value', 'hello!')
    cy.get('input[type="text"]').eq(1).type('https://www.amazon.com/Hi-Line-Gift-Ltd-Sitting-Beagle/dp/B01735UDZ6/ref=asc_df_B01735UDZ6/?tag=hyprod-20&linkCode=df0&hvadid=168252517435&hvpos=&hvnetw=g&hvrand=16614318678949718205&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028818&hvtargid=pla-274039571470&th=1')
      .should('have.value', 'https://www.amazon.com/Hi-Line-Gift-Ltd-Sitting-Beagle/dp/B01735UDZ6/ref=asc_df_B01735UDZ6/?tag=hyprod-20&linkCode=df0&hvadid=168252517435&hvpos=&hvnetw=g&hvrand=16614318678949718205&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028818&hvtargid=pla-274039571470&th=1')
    cy.get('button').eq(0).click()
    cy.get('.url').should('have.length', 3)
      .get('.url').eq(2).contains('http://localhost:3001/useshorturl/3')
  })

})