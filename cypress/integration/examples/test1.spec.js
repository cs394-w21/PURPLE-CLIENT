/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:19006')
    })
  
    it('input title - create a story', ()=> {
        cy.contains("Create a Story").click();
        cy.get(`input[placeholder="Give your story a cool name..."]`)
          .type('story title').should('have.value', 'story title')
    })

    it('input summary - create a story', ()=> {
        cy.contains("Create a Story").click();
        cy.get(`textarea[placeholder="In a few words, please tell me why this story is special to you..."]`)
          .type('summary').should('have.value', 'summary')
    })
    

  })