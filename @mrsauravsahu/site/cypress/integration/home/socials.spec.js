var socials = [
    { label: 'email', url: 'mailto:mrsauravsahu@outlook.com' },
    { label: 'github', url: 'https://github.com/mrsauravsahu' },
    { label: 'linkedIn', url: 'https://www.linkedin.com/in/mrsauravsahu' },
    { label: 'twitter', url: 'https://twitter.com/mrsauravsahu' },
    { label: 'instagram', url: 'https://instagram.com/mrsauravsahu' },
    { label: 'unsplash', url: 'https://unsplash.com/mrsauravsahu' },
];

describe('home page: social section', () => {
    beforeEach(() => cy.visit('/'));

    it('all social links should be displayed', () => {
        var socialButtons = cy.get('.social-container ss-button');
        socialButtons.should('have.length', socials.length);
    });
    
    it('social links should have correct labels', () => {
        var socialButtons = cy.get('.social-container ss-button');
        
        socialButtons.each((button, index) => {
            expect(button.get(0).innerText).equal(socials[index].label);
        });
    });
    
    // TODO: Check socials' links
    it.skip('social links should have correct links', () => {
        var socialButtons = cy.get('.social-container ss-button');
        socialButtons.should('have.length', socials.length);
    });
})