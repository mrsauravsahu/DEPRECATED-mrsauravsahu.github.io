/// <reference types="cypress" />

describe('home page', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('should contain the title', () => {
		cy.contains('./saurav-sahu').should('have.length', 1);
	});
	

	// TODO: Check correct number of nav items

	// TODO: Check project links

	// TODO: Check socials' links

	it('should have link to blog page', () => {
		cy.get('nav a').contains('blog').should('have.attr', 'href', '/blog');
	});
});