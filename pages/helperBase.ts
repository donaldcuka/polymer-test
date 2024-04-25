import {Page} from "@playwright/test"


export class HelperBase {

readonly page: Page

    constructor(page: Page){
        this.page = page
    }

async clickOnFirstItem(){

    await this.page.locator('.grid').getByRole('listitem').getByRole('link').locator('shop-list-item').first().click()

}


async addFirstItemToCart(){

    await this.page.getByRole('button', {name: "Add this item to cart"}).click()

}

    
}