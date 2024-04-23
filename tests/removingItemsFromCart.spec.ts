import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'


test("remove item from cart", async ({ page }) => {


//Navigate to Home Page

const navigateTo = new HomePage(page)
await navigateTo.homePage()



// Navigate to the product page

await page.goto("https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip")

// Add item to cart

await page.getByRole('button', {name: "Add this item to cart"}).click()
await page.locator('#viewCartAnchor').click()
await page.locator('.delete-button').click()


//assertation
const emptyCart = page.locator('.empty-cart')
const emptyCartText = await emptyCart.textContent()

expect(emptyCartText).toContain("is empty")






})