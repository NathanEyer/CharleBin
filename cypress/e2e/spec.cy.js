describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('TestCorrespondanceMessages', function() {
    const message = 'Ceci est un message secret';
    const password = 'bonjour';

    //Visite la page principale
    cy.visit('http://localhost:8080/');

    //Saisit le message et le mdp, puis crée le paste
    cy.get('#passwordinput').clear().type(password);
    cy.get('#message').clear().type(message);
    cy.get('#sendbutton').click();

    //Récupère l'URL du paste créé
    cy.url().then((url) => {
      //Visite l'URL
      cy.visit(url);

      cy.get('#pasteurl').click();
      cy.get('#passworddecrypt').clear("m").type(password);
      cy.get('#passwordform > .btn').click();

      //Vérifie que le message correspond
      cy.get('#prettyprint').should('contain', message);
    })
  });
})