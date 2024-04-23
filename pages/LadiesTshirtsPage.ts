import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class LadiesTshirtsPage extends HelperBase {


    constructor(page: Page){
        super (page)
    }

    async ladiesTshirtsPage(){
     await this.page.locator("#tabContainer").getByRole('link', { name:'Ladies T-Shirts'}).click()
    }

}