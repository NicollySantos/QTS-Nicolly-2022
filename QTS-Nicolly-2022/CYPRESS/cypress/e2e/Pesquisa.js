describe('empty spec', () => {
  it('Entrar', () => {
    cy.visit('https://mundoeducacao.uol.com.br/');

  })
  it('Pesquisar "biologia" na barra de pesquisa', () => {
    cy.get('.search:nth-child(1)').click();
    cy.get('.search:nth-child(1)').type('biologia');
    cy.get('form img').click();
    cy.url().should('contains', 'https://mundoeducacao.uol.com.br/busca');
  })
})
