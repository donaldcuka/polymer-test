import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class ShoppingCartPage extends HelperBase {


    constructor(page: Page){
        super (page)
    }

    async clickOnShoppingCartSection(){
        await this.page.locator('.cart-btn-container').getByRole('button').click()
       }


}