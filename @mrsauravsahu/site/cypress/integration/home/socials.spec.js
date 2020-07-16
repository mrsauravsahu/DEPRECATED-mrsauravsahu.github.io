var socials = [
    { label: 'mrsauravsahu@outlook.com', url: 'mailto:lel' },
    { label: 'github', url: 'https://github.com/mrsauravsahu' },
    { label: 'twitter', url: 'https://twitter.com/mrsauravsahu' },
    { label: 'unsplash', url: 'https://unsplash.com/mrsauravsahu' },
    { label: 'instagram', url: 'https://instagram.com/mrsauravsahu' },
];

describe('home page: social section', () => {
    beforeEach(() => cy.visit('/'));

    // TODO: Check socials' links
    it('social links should have correct labels', () => {
        var socialButtons = cy.get('.social-container ss-button');
        socialButtons.should('have.length', 5);

        socialButtons.each((button, index) => {
            expect(button.get(0).innerText).equal(socials[index].label);
        });
    });

    it.skip('social links should have correct links', () => {
        var socialButtons = cy.get('.social-container ss-button');
        socialButtons.should('have.length', 5);
    });
})