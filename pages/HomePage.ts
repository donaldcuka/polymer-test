import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class HomePage extends HelperBase {


    constructor(page: Page){
        super (page)
    }


async openHomePage(){    
    await this.page.goto("https://shop.polymer-project.org/")
}


}