import { test, expect } from '@playwright/test'
import { LadiesOuterwearPage } from '../pages/LadiesOuterwearPage';
import { LadiesTshirtsPage } from '../pages/LadiesTshirtsPage';
import { MensTshirtsPage } from '../pages/MensTshirtsPage';
import { MensOuterwearPage } from '../pages/MensOuterwearPage';


test('Menu navigation', async ({ page }) => {

    const ladiesTshirtsPage = new LadiesTshirtsPage(page)
    const ladiesOuterwearPage = new LadiesOuterwearPage(page)
    const mensOuterwearPage = new MensOuterwearPage(page)
    const mensTshirtsPage = new MensTshirtsPage(page)

    //Open Polymer shop website
    await page.goto('https://shop.polymer-project.org/')

    // Navigate to Ladies T-Shirts page
    await ladiesTshirtsPage.clickOnLadiesTshirtsSection()

    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts')

    const heading = await ladiesTshirtsPage.ladiesTshirtsHeading()
    await expect(heading).toHaveText('Ladies T-Shirts')


    // navigation to Ladie's Outerwear page 
    await ladiesOuterwearPage.clickOnLadiesOuterwearSection()

    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear')

    const heading1 = await ladiesOuterwearPage.ladiesOuterwearHeading()
    await expect(heading1).toHaveText('Ladies Outerwear')

    // navigation to Men's T-Shirts page 
    await mensTshirtsPage.clickOnMensTshirtsSection()

    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts')

    const heading2 = await mensTshirtsPage.mensTshirtsHeading()
    await expect(heading2).toHaveText('Men\'s T-Shirts')

    // navigation to Men's Outerwear page 
    await mensOuterwearPage.clickOnMensOuterwearSection()

    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear')

    const heading3 = await mensOuterwearPage.mensOuterwearHeading()
    await expect(heading3).toHaveText('Men\'s Outerwear')
})