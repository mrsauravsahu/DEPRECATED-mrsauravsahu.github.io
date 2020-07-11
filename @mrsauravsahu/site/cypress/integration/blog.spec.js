describe('blog page', () => {
    beforeEach(() => cy.visit('/'))

    it('should be navigable', () => {
        cy.get('nav a').contains('blog').click();
        cy.url().should('include', '/blog');
    });
})