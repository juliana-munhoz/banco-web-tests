Cypress.Commands.add('selecionarOpcaoCombobox', (seletorCampo, valor)=>{
    cy.get(`label[for="${seletorCampo}"]`).parent().as('campo')
        cy.get('@campo').click()
        cy.get('@campo')
            .contains(valor)
            .click()
})


Cypress.Commands.add('validarMensagemToast', (valor)=>{

    cy.get('.toast')
      .should('be.visible')
      .as('toast')

    cy.get('@toast') 
      .should('have.text',valor)
})



