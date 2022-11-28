describe('Tentar cadastrar um email já cadastrado', () => {
    it('Entrar na página', () => {
      cy.visit('https://mundoeducacao.uol.com.br/');

    })
    it('Inserir os dados', () => {
      cy.get('.sc-pVTFL > a').click();
      cy.get('#field-email').click();
      cy.get('#field-email').type('{backspace}');
      cy.get('#field-email').type('cypressteste@outlook.com');
      cy.get('#field-senha').click();
      cy.get('#field-senha').type('cypressteste');
      cy.get('#field-senha_confirmation').click();
      cy.get('#field-senha_confirmation').type('cypressteste');
      cy.get('#field-nome').click();
      cy.get('#field-nome').type('Cypress');
      cy.get('#field-dt_nascimento').click();
      cy.get('#field-dt_nascimento').click();
      cy.get('#field-dt_nascimento').click();
      cy.get('#field-dt_nascimento').click();
      cy.get('#field-dt_nascimento').type('2022-11-29');
    })
    it ('Enviar formulário', () => {
      cy.get('.sc-crHmcD').submit();


      
    })
  })


