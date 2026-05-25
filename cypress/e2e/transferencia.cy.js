describe('Tranferencias', ()=>{

    beforeEach(()=>{    
    
        cy.visit('/') 
        cy.fixture('credenciais').then(credenciais=>{
            cy.get('#username')
            .should('be.enabled')
            .type(credenciais.valida.user)
            cy.get('#senha')
            .should('be.enabled')
            .type(credenciais.valida.password) 
        })
        cy.contains('button','Entrar')
        .should('be.enabled')
        .click() 

    })

    it('Deve transferir quando informo dados validos', ()=>{
        cy.get('label[for="conta-origem"').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem')
            .contains('João da Silva com saldo de R$')
            .click()

        cy.get('label[for="conta-destino"').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino')
            .contains('Maria Oliveira com saldo de R$')
            .click()

        cy.get('#valor').type(10)
        cy.contains('button','Transferir').click()
        cy.get('#toast-container').should('have.text','Transferência realizada!')
    })
})