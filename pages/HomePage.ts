import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase"


export class HomePage extends HelperBase {


    constructor(page: Page){
        super (page)
    }


async homePage(){    
    await this.page.goto("https://shop.polymer-project.org/")
}


}