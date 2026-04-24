class LoginPage {
  visit() {
    // Avoid flaky third-party telemetry calls that can delay page load in CI/open mode.
    cy.intercept('POST', '**/api/summed-events/submit*', { statusCode: 204 })
    cy.intercept('POST', '**/api/unique-events/submit*', { statusCode: 204 })
    cy.intercept('POST', '**/UNIVERSE/TOKEN/json', { statusCode: 204 })
    cy.intercept('GET', '**/service-worker.js*', { statusCode: 204, body: '' })

    cy.visit('/', {
      timeout: 120000,
    })
    cy.location('pathname').should('eq', '/')
    cy.get('[data-test="username"]').should('be.visible')
  }
  fillUsername(username) { cy.get('[data-test="username"]').type(username) }
  fillPassword(password) { cy.get('[data-test="password"]').type(password) }
  submit() { cy.get('[data-test="login-button"]').click() }
  getError() { return cy.get('[data-test="error"]') }
}
export default new LoginPage()
