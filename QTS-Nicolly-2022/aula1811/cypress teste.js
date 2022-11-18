describe('Descricao teste', () = {

	it('Comando: waitfortime', () => {
		cy.wait(4000);
	})

	it('Comando: select', () => {
		cy.get('#ID')
			.select('ID2', {
				force: true
			})
			.find('option:selected')
			.should('have.text', 'ID2');
	})

	it('Comando: click', () => {
		cy.get('input[name="Teste"]').click({
			multiple: true,
			force: true
		});
	})

	it('Comando: countelements', () => {
		cy.get('.Class').should('have.length', 1);
	})

	it('Comando: fill', () => {
		cy.get('CSS Selector').type('123');
	})

	it('Comando: submit', () => {
		cy.xpath('xPath').submit();
	})

	it('Comando: assertnot', () => {
		cy.contains('Text').should('not.exist');
	})

	it('Comando: assert', () => {
		cy.contains('Text 2').should('exist');
	})

	it('Comando: click', () => {
		cy.contains('Text').click({
			multiple: true,
			force: true
		});
	})

	it('Comando: assert', () => {
		cy.contains('Text 2').should('exist');
	})
})