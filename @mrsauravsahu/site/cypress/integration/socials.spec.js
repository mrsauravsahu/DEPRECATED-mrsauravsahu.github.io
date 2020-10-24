var socials = [
    { label: 'email', url: 'mailto:mrsauravsahu@outlook.com' },
    { label: 'youtube', url: 'https://youtube.com/channel/UCPWETNZS6Cu3X2fYnpME32g' },
    { label: 'instagram', url: 'https://instagram.com/mrsauravsahu' },
    { label: 'twitter', url: 'https://twitter.com/mrsauravsahu' },
    { label: 'github', url: 'https://github.com/mrsauravsahu' },
    { label: 'linkedIn', url: 'https://www.linkedin.com/in/mrsauravsahu' },
    { label: 'unsplash', url: 'https://unsplash.com/mrsauravsahu' },
];

describe('socials page', () => {
    beforeEach(() => cy.visit('/socials'));

    it('all social links should be displayed', () => {
        var socialButtons = cy.get('.social-container a');
        socialButtons.should('have.length', socials.length);
    });
    
    it('social links should have correct labels', () => {
        var socialButtons = cy.get('.social-container a');
        
        socialButtons.each((button, index) => {
            expect(button.get(0).innerText).equal(socials[index].label);
        });
    });
    
    it('social links should have correct links', () => {
        var socialButtons = cy.get('.social-container a');
        
        socialButtons.each((button, index) => {
            expect(button.attr('href')).equal(socials[index].url);
        });
    });
})