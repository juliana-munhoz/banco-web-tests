describe('Login', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:4000')
    cy.screenshot('após visitar pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.get('#username')
      .should('be.enabled')
      .type('julio.lima')
    cy.get('#senha')
      .should('be.enabled')
      .type('123456')
    cy.contains('button','Entrar')
      .should('be.enabled')
      .click()

    cy.contains('h4','Realizar Transferência')
      .should('be.visible')
  })

  it('Login com senha incorreta não deve permitir logar', () => {

    cy.get('#username')
      .should('be.enabled')
      .type('julio.lima')
    cy.get('#senha')
      .should('be.enabled')
      .type('123456xxxx')
    cy.contains('button','Entrar')
      .should('be.enabled')
      .click()

    cy.get('.toast')
      .should('be.visible')
      .as('toast')

    cy.get('@toast') 
      .should('have.text','Erro no login. Tente novamente.')
  })

  it('Login com email incorreto não deve permitir logar', () => {
    
    cy.get('#username')
      .should('be.enabled')
      .type('maria.lima')
    cy.get('#senha')
      .should('be.enabled')
      .type('123456')
    cy.contains('button','Entrar')
      .should('be.enabled')
      .click()

    cy.get('.toast')
      .should('be.visible')
      .as('toast')

    cy.get('@toast') 
      .should('have.text','Erro no login. Tente novamente.')
  })

  it('Login com email e senha incorretos não deve permitir logar', () => {
    
    cy.get('#username')
      .should('be.enabled')
      .type('maria.lima')
    cy.get('#senha')
      .should('be.enabled')
      .type('123456xxx')
    cy.contains('button','Entrar')
      .should('be.enabled')
      .click()

    cy.get('.toast')
      .should('be.visible')
      .as('toast')

    cy.get('@toast') 
      .should('have.text','Erro no login. Tente novamente.')
  })
})