import {Page} from "@playwright/test"


export class MensOuterwear {

readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async mensOuterwearPage(){
     await this.page.locator("#tabContainer").getByRole('link', { name:'Men\'s Outerwear'}).click()
    }

}