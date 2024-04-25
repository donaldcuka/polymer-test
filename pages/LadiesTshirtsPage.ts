import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class LadiesTshirtsPage extends HelperBase {


    constructor(page: Page){
        super (page)
    }

    async clickOnLadiesTshirtsSection(){
     await this.page.locator("#tabContainer").getByRole('link', { name:'Ladies T-Shirts'}).click()
    }

    
    async ladiesTshirtsHeading(){
      return this.page.getByRole ('heading',  { name: 'Ladies T-Shirts' })
    }

}