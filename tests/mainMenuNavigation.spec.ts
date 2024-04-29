import { test, expect } from '@playwright/test'
import { NavigationPage } from '../pages/NavigationPage'
test('Menu navigation', async ({ page }) => {

    const navigationPage = new NavigationPage(page)

    //Open Polymer shop website
    await navigationPage.openPolymerShop()
    // Navigate to Ladies T-Shirts page
    await navigationPage.clickOnLadiesTshirtsSection()
    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts')
    const heading = await navigationPage.ladiesTshirtsHeading()
    await expect(heading).toHaveText('Ladies T-Shirts')
    // navigation to Ladie's Outerwear page 
    await navigationPage.clickOnLadiesOuterwearSection()
    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear')
    const heading1 = await navigationPage.ladiesOuterwearHeading()
    await expect(heading1).toHaveText('Ladies Outerwear')
    // navigation to Men's T-Shirts page 
    await navigationPage.clickOnMensTshirtsSection()
    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts')
    const heading2 = await navigationPage.mensTshirtsHeading()
    await expect(heading2).toHaveText('Men\'s T-Shirts')
    // navigation to Men's Outerwear page 
    await navigationPage.clickOnMensOuterwearSection()
    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear')
    const heading3 = await navigationPage.mensOuterwearHeading()
    await expect(heading3).toHaveText('Men\'s Outerwear')
})