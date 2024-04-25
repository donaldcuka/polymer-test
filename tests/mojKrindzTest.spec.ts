import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LadiesOuterwearPage } from '../pages/LadiesOuterwearPage'
import { LadiesTshirtsPage } from '../pages/LadiesTshirtsPage'
import { MensOuterwearPage } from '../pages/MensOuterwearPage'
import { MensTshirtsPage } from '../pages/MensTshirtsPage'
import { ShoppingCartPage } from '../pages/ShoppingCartPage'
import { HelperBase } from '../pages/helperBase'


test("Krindz test", async ({ page }) => {

    const ladiesTshirtsPage = new LadiesTshirtsPage(page)
    const ladiesOuterwearPage = new LadiesOuterwearPage(page)
    const mensOuterwearPage = new MensOuterwearPage(page)
    const mensTshirtsPage = new MensTshirtsPage(page)
    const shoppingCartPage = new ShoppingCartPage(page)
    const homePage = new HomePage(page)
    const helperBase = new HelperBase(page)


    await homePage.openHomePage()

    await mensOuterwearPage.clickOnMensOuterwearSection()

    await helperBase.clickOnFirstItem()
    await helperBase.addFirstItemToCart()

    await mensTshirtsPage.clickOnMensTshirtsSection()

    await helperBase.clickOnFirstItem()
    await helperBase.addFirstItemToCart()

    await ladiesOuterwearPage.clickOnLadiesOuterwearSection()

    await helperBase.clickOnFirstItem()
    await helperBase.addFirstItemToCart()

    await ladiesTshirtsPage.clickOnLadiesTshirtsSection()

    await helperBase.clickOnFirstItem()
    await helperBase.addFirstItemToCart()

    await shoppingCartPage.clickOnShoppingCartSection()

})
