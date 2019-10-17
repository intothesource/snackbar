describe('Check if the snackbar shows if button is pressed', () => {
    it('Can click one button after each other with working snackbar buttons', () => {
        cy.visit('http://localhost:3000/example');
        cy.get('#appleButton').click();
        cy.wait(400);
        cy.get('[data-its-snackbar-button]').click();
        cy.get('[data-its-snackbar-content]').contains('An apple a day keeps your mom at bay.');
        cy.wait(3600);
        cy.get('#bananaButton').click();
        cy.get('[data-its-snackbar-button]').click();
        cy.get('[data-its-snackbar-content]').contains('Time flies like an arrow - but fruit flies like a banana.');
        cy.wait(6400);
    });
    it('Can click two buttons almost simultaneously', () => {
        cy.visit('http://localhost:3000/example');
        cy.get('#appleButton').click();
        cy.get('#bananaButton').click();
        cy.get('[data-its-snackbar-button]').click();
    });
});
