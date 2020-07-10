/// <reference types="cypress" />

describe('home page', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('should contain the title', () => {
		var title = cy.contains('./saurav-sahu');

		title.should('have.length', 1);
		title.should('have.attr', 'href', '/#');
	});

	it('should have link to blog page', () => {
		cy.get('nav a').contains('blog').should('have.attr', 'href', '/blog');
	});

	// TODO: Check correct number of nav items

	// TODO: Check project links
});