import loginPage from '../pages/loginPage'

describe('Login', () => {
  it('Fluxos de login (sucesso, invalido e bloqueado)', () => {
    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.submit()
    cy.url().should('include', '/inventory')

    // Logout para voltar a tela de login sem novo cy.visit()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include', '/')

    loginPage.fillUsername('user_errado')
    loginPage.fillPassword('senha_errada')
    loginPage.submit()
    loginPage.getError().should('be.visible')

    cy.get('[data-test="username"]').clear().type('locked_out_user')
    cy.get('[data-test="password"]').clear().type('secret_sauce')
    loginPage.submit()
    loginPage.getError().should('be.visible').and('contain', 'Sorry, this user has been locked out.')
    cy.url().should('not.include', '/inventory.html')
  })
})