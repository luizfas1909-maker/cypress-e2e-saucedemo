import loginPage from '../pages/loginPage'

describe('Login', () => {
  it('Login com sucesso', () => {
    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.submit()
    cy.url().should('include', '/inventory')
  })

  it('Login inválido', () => {
    loginPage.visit()
    loginPage.fillUsername('user_errado')
    loginPage.fillPassword('senha_errada')
    loginPage.submit()
    loginPage.getError().should('be.visible')
  })
})
