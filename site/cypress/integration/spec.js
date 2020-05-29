describe('mrsauravsahu.github.io', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	// TODO: Check correct header
	// it('has the correct header', () => {
	// 	cy.contains('', 'Great success!')
	// });

	// TODO: Check correct number of nav items
	
	// TODO: Check project links
	
	// TODO: Check socials' links

	it('navigates to /blog', () => {
		cy.get('nav a').contains('blog').click();
		cy.url().should('include', '/blog');
	});
});