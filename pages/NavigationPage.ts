import { Page } from "@playwright/test"

export class NavigationPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    //Open Polymer-shop HomePage
    async openPolymerShop() {
    
        await this.page.goto('https://shop.polymer-project.org/')
    }
    //Ladies Outerwear Navigation 
    async clickOnLadiesOuterwearSection() {
        await this.page.locator("#tabContainer").getByRole('link', { name: 'Ladies Outerwear' }).click()
    }
    async ladiesOuterwearHeading() {
        return this.page.getByRole('heading', { name: 'Ladies Outerwear' })
    }
    // Ladies T-Shirt Navigation
    async clickOnLadiesTshirtsSection() {
        await this.page.locator("#tabContainer").getByRole('link', { name: 'Ladies T-Shirts' }).click()
    }
    async ladiesTshirtsHeading() {
        return this.page.getByRole('heading', { name: 'Ladies T-Shirts' })
    }
    //Mens Outerwear Navigation
    async clickOnMensOuterwearSection() {
        await this.page.locator("#tabContainer").getByRole('link', { name: 'Men\'s Outerwear' }).click()
    }
    async mensOuterwearHeading() {
        return this.page.getByRole('heading', { name: 'Men\'s Outerwear' })
    }
    //Mens T-Shirts Navigation
    async clickOnMensTshirtsSection() {
        await this.page.locator("#tabContainer").getByRole('link', { name: 'Men\'s T-Shirts' }).click()
    }
    async mensTshirtsHeading() {
        return this.page.getByRole('heading', { name: 'Men\'s T-Shirts' })
    }
    //Item Page Navigation
    async clickOnFirstItem() {
        await this.page.locator('.grid').getByRole('listitem').getByRole('link').locator('shop-list-item').first().click()
    }
    async clickOnAddToCartButton(){
        await this.page.getByLabel('Add this item to cart').click()
    }
    async clickOnCheckoutButton(){
        await this.page.getByRole('link', { name: 'Checkout' }).click()
    }
    //Shoping Cart Page Navigation
    async addFirstItemToCart() {
        await this.page.getByRole('button', { name: "Add this item to cart" }).click()
    }
}