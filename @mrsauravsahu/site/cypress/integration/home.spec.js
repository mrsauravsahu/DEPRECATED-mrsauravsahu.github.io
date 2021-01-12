/// <reference types="cypress" />

describe('home page', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('should contain the title', () => {
		var title = cy.contains('ss');

		title.should('have.length', 1);
		title.should('have.attr', 'href', '/#');
	});

	it('should have link to blog page', () => {
		cy.get('nav a[href="/blog"]').first('h4').contains('blog')
	});

	it('should have link to socials page', () => {
		cy.get('nav a[href="/socials"]').first('h4').contains('socials')
	});

	it('should have link to links page', () => {
		cy.get('nav a[href="/links"]').first('h4').contains('links')
	});

	// TODO: Check correct number of nav items

	// TODO: Check project links
});