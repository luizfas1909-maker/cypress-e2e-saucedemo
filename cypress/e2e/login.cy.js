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

describe('Login - Usuário bloqueado', () => { 
  beforeEach(() => {  
    cy.visit('/')
  })
  it('Deve impedir login com usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // valida mensagem de erro
    cy.get(' [data-test="error"]').should('be.visible').and('contain', 'Sorry, this user has been locked out.' )

    // garante que não entrou
    cy.url().should('not.include', '/inventory.html')
  })
})