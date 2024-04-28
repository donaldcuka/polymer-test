import { test, expect } from '@playwright/test'
import { NavigationPage } from "../pages/NavigationPage"
import { CheckoutPage } from '../pages/CheckoutPage'

test('ordering item with valid information', async ({ page }) => {

    const navigationPage = new NavigationPage(page)
    const checkoutPage = new CheckoutPage(page)

    await checkoutPage.openPolymerShop()
    await checkoutPage.clickOnMensOuterwearSection()
    await checkoutPage.clickOnFirstItem()
    await checkoutPage.selectQuantity3()
    await checkoutPage.selectSizeS()
    await checkoutPage.clickOnAddToCartButton()
    await checkoutPage.clickOnCheckoutButton()
    await checkoutPage.typeInvalidAddressInfo()
    await checkoutPage.clickOnAddressTextbox()
    await checkoutPage.clickOnPlaceOrderButton()

    //assertion
    const addressTextColorAfterClick = page.locator('#shipAddressLabel')
    await expect(addressTextColorAfterClick).toHaveCSS('color', 'rgb(221, 44, 0)')
})