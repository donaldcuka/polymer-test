import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class LadiesOuterwearPage extends HelperBase {


    constructor(page: Page){
        super (page)
    }

    async clickOnLadiesOuterwearSection(){
     await this.page.locator("#tabContainer").getByRole('link', { name:'Ladies Outerwear'}).click()
    }

}