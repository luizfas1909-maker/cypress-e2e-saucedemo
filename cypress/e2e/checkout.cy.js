import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import checkoutPage from '../pages/checkoutPage'

describe('Checkout', () => {
  beforeEach(() => {
    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.submit()
    inventoryPage.addProductToCart()
    inventoryPage.goToCart()
  })

  it('Finalizar compra com sucesso', () => {
    checkoutPage.startCheckout()
    checkoutPage.fillInformation('Luiz', 'QA', '88888')
    checkoutPage.continue()
    checkoutPage.finish()
    checkoutPage.successMessage().should('contain', 'Thank you')
  })
})
