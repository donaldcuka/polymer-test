import { Page } from "@playwright/test"
import { NavigationPage } from "./NavigationPage"

export class CheckoutPage extends NavigationPage {
    constructor(page: Page) {
        super(page)
    }
    //Select S size
    async selectSizeS() {
        await this.page.getByLabel('Size').selectOption('S');
    }
    //Select quantity of 3 items
    async selectQuantity3() {
        await this.page.getByLabel('Quantity').selectOption('3')
    }
    //type valid information for ordering products
    async typeValidInfo() {
        await this.page.getByRole('textbox', { name: 'Email' }).fill('bill@cmail.com')
        await this.page.getByRole('textbox', { name: 'Phone Number' }).fill('0631928376')

        await this.page.getByRole('textbox', { name: 'Address Shipping Address' }).fill('Center St 66')
        await this.page.getByRole('textbox', { name: 'State/Province' }).fill('California')
        await this.page.getByRole('textbox', { name: 'City Shipping Address' }).fill('Los Angeles')
        await this.page.getByRole('textbox', { name: 'State/Province Shipping' }).fill('California')
        await this.page.getByRole('textbox', { name: 'Zip/Postal Code Shipping' }).fill('90001')
        await this.page.getByPlaceholder('Cardholder Name').fill('John London')
        await this.page.getByPlaceholder('Card Number').fill('374245455400126')
        await this.page.getByPlaceholder('CVV').fill('333')
        await this.page.getByLabel('Expiry year').selectOption('2026')
    }
    //click on Place Order Button
    async clickOnPlaceOrderButton() {
        await this.page.getByRole('button', { name: 'Place Order' }).click()
    }

}