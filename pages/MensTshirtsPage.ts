import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class MensTshirtsPage extends HelperBase {


    constructor(page: Page){
        super (page)
    }

    async mensTshirtsPage(){
     await this.page.locator("#tabContainer").getByRole('link', { name:'Men\'s T-Shirts'}).click()
    }

}