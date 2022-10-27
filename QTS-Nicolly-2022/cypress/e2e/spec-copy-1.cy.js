describe('Sistema de busca do Google', () => {
  it('E acessa a página do Google', () => {
    cy.visit('https://www.google.com.br')
  })
  it('E ele digite algo no campo de busca', () => {
    cy.get('input[name=q]').type('Etec Professor Camargo Aranha')
  })
  it('Quando ele clica em Pesquisa Google', () => {
    cy.get('form').submit()
  })
  it('Então verificar a existência do texto Canmargo Aranha', () => {
    cy.get('h3').should('have.text', 'Camargo Aranha')  
  })
})