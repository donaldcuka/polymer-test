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
    await checkoutPage.typeValidInfo()
    await checkoutPage.clickOnPlaceOrderButton()

    //assertion

    const orderHeading = page.getByRole('heading', { name: 'Thank you' })
    await expect(orderHeading).toHaveText('Thank you')
})