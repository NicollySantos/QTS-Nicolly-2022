describe('Sistema de busca do Google', () => {
  it('E acessa a página do Google', () => {
    cy.visit('https://www.google.com.br')
  })
  it('E ele digite algo no campo de busca', () => {
    cy.get('input[name=q]').type('Shopee')
  })
  it('Quando ele clica em Pesquisa Google', () => {
    cy.get('form').submit()
  })
  it('E acessa a página da Shopee', () => {
    cy.visit('https://www.shopee.com.br/')
  })
  it('E acessa a página "Entrar"', () => {
    cy.visit('  https://shopee.com.br/buyer/login?gclid=EAIaIQobChMIk_Opwsi3-wIVEWSRCh16FgjPEAAYASAAEgIDbvD_BwE&next=https%3A%2F%2Fshopee.com.br%2F%3Fgclid%3DEAIaIQobChMIk_Opwsi3-wIVEWSRCh16FgjPEAAYASAAEgIDbvD_BwE')
  })
})