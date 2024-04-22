import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class MensOuterwear extends HelperBase {


    constructor(page: Page){
        super (page)
    }

    async mensOuterwearPage(){
     await this.page.locator("#tabContainer").getByRole('link', { name:'Men\'s Outerwear'}).click()
    }

}