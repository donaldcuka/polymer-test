import { test, expect } from '@playwright/test'
import { LadiesOuterwearPage } from '../pages/LadiesOuterwearPage';
import { LadiesTshirtsPage } from '../pages/LadiesTshirtsPage';
import { MensTshirtsPage } from '../pages/MensTshirtsPage';
import { MensOuterwearPage } from '../pages/MensOuterwearPage';


test('Menu navigation', async ({ page }) => {

    const ladiesTshirtsPage = new LadiesTshirtsPage(page);
    const ladiesOuterwearPage = new LadiesOuterwearPage(page);
    const mensOuterwearPage = new MensOuterwearPage(page);
    const mensTshirtsPage = new MensTshirtsPage(page);

    //Open Polymer shop website
    await page.goto('https://shop.polymer-project.org/')

    // Navigate to Ladies T-Shirts page
    await ladiesTshirtsPage.clickOnLadiesTshirtsSection();

    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/ladies_tshirts')

    // navigation to Ladie's Outerwear page 
    await ladiesOuterwearPage.clickOnLadiesOuterwearSection()

    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/ladies_outerwear')

    // navigation to Men's T-Shirts page 
    await mensTshirtsPage.clickOnMensTshirtsSection()

    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/mens_tshirts')

    // navigation to Men's Outerwear page 
    await mensOuterwearPage.clickOnMensOuterwearSection()

    // assertion
    await expect(page).toHaveURL('https://shop.polymer-project.org/list/mens_outerwear')
})