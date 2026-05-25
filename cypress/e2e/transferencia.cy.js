import credenciais from '../fixtures/credenciais.json'

describe('Tranferencias', ()=>{

    beforeEach(()=>{        
        cy.visit('/') 
        cy.fazerLogin(credenciais.valida.user,credenciais.valida.password)
    })

    it('Deve transferir quando informo dados validos', ()=>{

        cy.realizarTransferencia('João da Silva','Maria Oliveira',10)
        
        cy.validarMensagemToast('Transferência realizada!')
    })

    it('Não deve transferir quando o valor é > 5000 e não passa o token', ()=>{

        cy.realizarTransferencia('João da Silva','Maria Oliveira',5001)
        
        cy.validarMensagemToast('Saldo insuficiente para realizar a transferência.')
    })
})