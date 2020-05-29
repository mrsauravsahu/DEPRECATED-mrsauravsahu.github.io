describe('blog page', () => {
    beforeEach(() => cy.visit('/'))

    it('page should be navigable', () => {
        cy.get('nav a').contains('blog').click();
        cy.url().should('include', '/blog');
    });
})