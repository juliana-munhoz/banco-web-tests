import credenciais from '../fixtures/credenciais.json'

describe('Login', () => {

  beforeEach(()=>{
    cy.visit('/')  
    cy.screenshot('apos-visitar-login')  
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {

    cy.fazerLogin(credenciais.valida.user,credenciais.valida.password)
    
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

    cy.validarMensagemToast('Erro no login. Tente novamente.')
    
  })

  it('Login com usuário incorreto não deve permitir logar', () => {
    
    cy.fazerLogin(credenciais.invalida.user,credenciais.invalida.password)

    cy.validarMensagemToast('Erro no login. Tente novamente.')
  })

  it('Login com usuário e senha incorretos não deve permitir logar', () => {
    
    cy.fazerLogin(credenciais.invalida.user,credenciais.invalida.password)

    cy.validarMensagemToast('Erro no login. Tente novamente.')
  })
})