import { Page } from "@playwright/test"
import { NavigationPage } from "./NavigationPage"

export class ShoppingCartPage extends NavigationPage {
    constructor(page: Page) {
        super(page)
    }

    async clickOnShoppingCartSection() {
        await this.page.locator('.cart-btn-container').getByRole('button').click()
    }



}