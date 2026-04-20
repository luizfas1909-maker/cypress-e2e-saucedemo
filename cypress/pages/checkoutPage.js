class CheckoutPage {
  startCheckout() { cy.get('[data-test="checkout"]').click() }
  fillInformation(firstName, lastName, zip) {
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(zip)
  }
  continue() { cy.get('[data-test="continue"]').click() }
  finish() { cy.get('[data-test="finish"]').click() }
  successMessage() { return cy.get('.complete-header') }
}
export default new CheckoutPage()
