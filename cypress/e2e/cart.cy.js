import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'

describe('Carrinho', () => {
  beforeEach(() => {
    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.submit()
  })

  it('Adicionar produto ao carrinho', () => {
    inventoryPage.addProductToCart()
    inventoryPage.goToCart()
    cy.get('.cart_item').should('have.length', 1)
  })
})
