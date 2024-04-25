import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class MensOuterwearPage extends HelperBase {


    constructor(page: Page){
        super (page)
    }

    async clickOnMensOuterwearSection(){
     await this.page.locator("#tabContainer").getByRole('link', { name:'Men\'s Outerwear'}).click()
    }

    async mensOuterwearHeading(){
        return this.page.getByRole ('heading',  { name: 'Men\'s Outerwear' })
      }

}