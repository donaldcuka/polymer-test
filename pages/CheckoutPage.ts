import { Page } from "@playwright/test"
import { NavigationPage } from "./NavigationPage"
import { faker } from "@faker-js/faker";

export class CheckoutPage extends NavigationPage {

    constructor(page: Page) {
        super(page)
    }

    //Select S size
    async selectSizeS() {
        return this.page.getByLabel('Size').selectOption('S');
    }
    //Select quantity of 3 items
    async selectQuantity3() {
        return this.page.getByLabel('Quantity').selectOption('3')
    }
    //click on Addres Textbox
    async clickOnAddressTextbox() {
        this.page.getByRole('textbox', { name: 'Address Shipping Address' })
    }

    //type invalid address information (address containing only numbers)
    async enterInfoWithoutAddress() {
        await this.page.getByRole('textbox', { name: 'Email' }).fill(faker.internet.email())
        await this.page.getByRole('textbox', { name: 'Phone Number' }).fill('7854209537')
    }
    //type valid information for ordering products
    async enterValidOrderInfo() {
        await this.page.getByRole('textbox', { name: 'Email' }).fill(faker.internet.email())
        await this.page.getByRole('textbox', { name: 'Phone Number' }).fill('4832117360')
        await this.page.getByRole('textbox', { name: 'Address Shipping Address' }).fill(faker.location.streetAddress())
        await this.page.getByRole('textbox', { name: 'State/Province' }).fill(faker.location.state())
        await this.page.getByRole('textbox', { name: 'City Shipping Address' }).fill(faker.location.city())
        await this.page.getByRole('textbox', { name: 'State/Province Shipping' }).fill(faker.location.county())
        await this.page.getByRole('textbox', { name: 'Zip/Postal Code Shipping' }).fill(faker.location.zipCode())
        await this.page.getByPlaceholder('Cardholder Name').fill(faker.person.fullName())
        await this.page.getByPlaceholder('Card Number').fill('347283528711207')
        await this.page.getByPlaceholder('CVV').fill(faker.finance.creditCardCVV())
        await this.page.getByLabel('Expiry year').selectOption('2026')
    }
    //click on Place Order Button
    async clickOnPlaceOrderButton() {
        await this.page.getByRole('button', { name: 'Place Order' }).click()
    }
    //Added to cart pop-up
    async addedToCartPopUp() {
        return this.page.getByRole('dialog')
    }
    //Address Label
    async addressLabel() {
       return this.page.locator('#shipAddressLabel')
    }
    async orderHeadingLocator() {
        return this.page.getByRole('heading', { name: 'Thank you' })
    }
}