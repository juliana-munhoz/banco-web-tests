Cypress.Commands.add('fazerLogin',(user,password)=>{
    cy.get('#username')
      .should('be.enabled')
      .type(user)
    cy.get('#senha')
      .should('be.enabled')
      .type(password)  

    cy.contains('button','Entrar')
      .should('be.enabled')
      .click()
})