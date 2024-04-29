import { test, expect } from '@playwright/test'
import { CheckoutPage } from '../pages/CheckoutPage'

test('ordering item with valid information', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page)
    //Opening Homepage
    await checkoutPage.openPolymerShop()
    //assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/')
    //Selecting Men's Outerwear Section
    await checkoutPage.clickOnMensOuterwearSection()
    //assertion
    const mensOH = await checkoutPage.mensOuterwearHeading()
    await expect(mensOH).toHaveText('Men\'s Outerwear')
    //Click on the first item in Men's Outerwear Section
    await checkoutPage.clickOnFirstItem()
    //assertion
    await expect(page).toHaveURL(/mens_outerwear/)
    //Select quantity
    await checkoutPage.selectQuantity3()
    //assertion
    const quantity3 = await checkoutPage.selectQuantity3()
    expect(quantity3).toContain('3')
    //Select Size
    await checkoutPage.selectSizeS()
    //assertion
    const sizeS = await checkoutPage.selectSizeS()
    expect(sizeS).toContain('S')
    //Click on add to cart button
    await checkoutPage.clickOnAddToCartButton()
    //assertion
    const addedToCartPopUp = await checkoutPage.addedToCartPopUp()
    expect(addedToCartPopUp).toBeVisible()
    //Click on checkout button
    await checkoutPage.clickOnCheckoutButton()
    //assertion
    await expect(page).toHaveURL(/checkout/)
    //Type all information in the Checkout page
    await checkoutPage.enterInfoWithoutAddress()
    //Click on Place Order button
    await checkoutPage.clickOnPlaceOrderButton()
    //assertion
    const addressTextColorAfterClick = await checkoutPage.addressLabel()
    await expect(addressTextColorAfterClick).toHaveCSS('color', 'rgb(221, 44, 0)')   
})
