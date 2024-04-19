import {test, expect} from '@playwright/test'

test.beforeEach (async({page}) => {
    await page.goto('https://shop.polymer-project.org/')
})

test('navigate to Mens Outerwear page', async ({page}) => {
    
})