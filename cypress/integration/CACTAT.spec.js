/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
   beforeEach(function() {
      cy.visit('./src/index.html')
   })
   it('verifica o título da aplicação', function() {
     
      cy.title().should('eq','Central de Atendimento ao Cliente TAT')
   })

   it('Testes campos obrigatorios', function(){

      const longtext = 'teste,teste,teste,teste,teste,teste,teste,teste,teste'
      cy.get('#firstName').type('Marcos')
      cy.get('#lastName').type('Rocha')
      cy.get('#email').type('marcos@exemplo.com')
      cy.get('#open-text-area').type(longtext,{delay : 0})

      cy.get('button[type=submit]').click()
      cy.get('.success').should('be.visible')
   })

   it('Validar mensagem de erro ou passar um email Invalido', function(){
      cy.get('#firstName').type('Marcos')
      cy.get('#lastName').type('Rocha')
      cy.get('#email').type('marcosexemplo.com')
      cy.get('#open-text-area').type('teste')

      cy.get('button[type=submit]').click()
      cy.get('.error').should('be.visible')
   })

   it('Validar campo telefone fica vazio quando preenchemos nao numerico',function(){
      cy.get('#phone').type('gerthrtryjik').should('have.value', '')
   })

 
  })