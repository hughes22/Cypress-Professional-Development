describe('My Udemy Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.products').find('.product').should('have.length',4)
      cy.get('.product:visible').should('have.length',4)
      cy.get('.products').should('be.visible')
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      cy.get('.brand').should('have.text','GREENKART')
      cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
            cy.wrap($el).find('button').click()
        }
      })
      cy.get('.brand').then(function(logo){
        cy.log(logo.text())

      })
      cy.get('[alt="Cart"]').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()

      // cypress/support/commands.js

Cypress.Commands.add('selectRandomCountry', () => {
  cy.get('select') // Replace with the actual selector for your country list
    .then($countryList => {
      const countries = $countryList.find('option').toArray();
      const randomIndex = Cypress._.random(0, countries.length - 1);
      const randomCountry = countries[randomIndex].text;
      cy.get('select').select(randomCountry); // Replace with the actual selector for your dropdown
      cy.log(`Selected random country: ${randomCountry}`);
    });
});
cy.selectRandomCountry();
  cy.get('.chkAgree').check()
  cy.contains('Proceed').click()
    })
})