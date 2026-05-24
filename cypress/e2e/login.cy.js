import credenciais from '../fixtures/credenciais.json'

describe('Login', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('URL'))  
    cy.screenshot('apos-visitar-login')  
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {

    cy.get('#username')
      .should('be.enabled')
      .type(credenciais.valida.user)
    cy.get('#senha')
      .should('be.enabled')
      .type(credenciais.valida.password)  
   
    cy.contains('button','Entrar')
      .should('be.enabled')
      .click()

    cy.contains('h4','Realizar Transferência')
      .should('be.visible')
  })

  it('Login com senha incorreta não deve permitir logar', () => {

    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username')
        .should('be.enabled')
        .type(credenciais.invalida.user)
      cy.get('#senha')
        .should('be.enabled')
        .type(credenciais.invalida.password)
    })  
    
    cy.contains('button','Entrar')
      .should('be.enabled')
      .click()

    cy.get('.toast')
      .should('be.visible')
      .as('toast')

    cy.get('@toast') 
      .should('have.text','Erro no login. Tente novamente.')
  })

  it('Login com usuário incorreto não deve permitir logar', () => {
    
    cy.get('#username')
      .should('be.enabled')
      .type(credenciais.invalida.user)
    cy.get('#senha')
      .should('be.enabled')
      .type(credenciais.invalida.password)
    cy.contains('button','Entrar')
      .should('be.enabled')
      .click()

    cy.get('.toast')
      .should('be.visible')
      .as('toast')

    cy.get('@toast') 
      .should('have.text','Erro no login. Tente novamente.')
  })

  it('Login com usuário e senha incorretos não deve permitir logar', () => {
    
    cy.get('#username')
      .should('be.enabled')
      .type(credenciais.invalida.user)
    cy.get('#senha')
      .should('be.enabled')
      .type(credenciais.invalida.password)
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