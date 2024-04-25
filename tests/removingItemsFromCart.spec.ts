import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'


test("remove item from cart", async ({ page }) => {


//Navigate to Home Page

const navigateTo = new HomePage(page)
await navigateTo.homePage()



// Navigate to the product page

await page.locator("#tabContainer").getByRole('link', { name:'Men\'s Outerwear'}).click()


//OVU LINIJU POPRAVI, NE LOCIRA PRVI PROIZVOD


await page.locator('.grid').getByRole('listitem').getByRole('link').locator('shop-list-item').first().click()


// Add item to cart

await page.getByRole('button', {name: "Add this item to cart"}).click()
await page.locator('#viewCartAnchor').click()
await page.locator('.delete-button').click()


//assertation
const emptyCart = page.locator('.empty-cart')
const emptyCartText = await emptyCart.textContent()

expect(emptyCartText).toContain("is empty")






})