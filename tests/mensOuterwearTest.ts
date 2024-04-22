import {test, expect} from '@playwright/test'
import { MensOuterwear } from '../page-objects/MensOuterwearPage.ts'

test.beforeEach (async({page}) => {
    await page.goto('https://shop.polymer-project.org/')
})


test('navigate to Mens Outerwear page', async ({page}) => {

const navigateTo = new MensOuterwear(page)
await navigateTo.mensOuterwearPage()

// assertion

const headline = page.getByRole ('heading',  { name: 'Men\'s Outerwear' })
await expect(headline).toHaveText('Men\'s Outerwear')

})