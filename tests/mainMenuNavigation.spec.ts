import {test, expect} from '@playwright/test'
import { MensOuterwearPage } from '../pages/MensOuterwearPage'
import { LadiesOuterwearPage } from '../pages/LadiesOuterwearPage'
import { MensTshirtsPage } from '../pages/MensTshirtsPage'
import { LadiesTshirtsPage } from '../pages/LadiesTshirtsPage'

test.beforeEach (async({page}) => {
    await page.goto('https://shop.polymer-project.org/')
})


test.describe ('testing menu navigation', () => {



// navigation to Men's Outerwear page 

test('navigate to Mens Outerwear page', async ({page}) => {

    const navigateTo = new MensOuterwearPage(page)
    await navigateTo.mensOuterwearPage()
    
    // assertion
    
    const headline = page.getByRole ('heading',  { name: 'Men\'s Outerwear' })
    await expect(headline).toHaveText('Men\'s Outerwear')
    
    })

    // navigation to Ladie's Outerwear page 

test('navigate to Ladies Outerwear page', async ({page}) => {

    const navigateTo = new LadiesOuterwearPage(page)
    await navigateTo.ladiesOuterwearPage()
        
    // assertion
        
    const headline = page.getByRole ('heading',  { name: 'Ladies Outerwear' })
    await expect(headline).toHaveText('Ladies Outerwear')
        
    })

    // navigation to Men's T-Shirts page 


test('navigate to Mens Tshirts page', async ({page}) => {

    const navigateTo = new MensTshirtsPage(page)
    await navigateTo.mensTshirtsPage()
            
    // assertion
            
    const headline = page.getByRole ('heading',  { name: 'Men\'s T-Shirts' })
    await expect(headline).toHaveText('Men\'s T-Shirts')
            
    })

    // navigation to Ladie's T-Shirts page 


test('navigate to Ladies Tshirts page', async ({page}) => {

    const navigateTo = new LadiesTshirtsPage(page)
    await navigateTo.ladiesTshirtsPage()
                
    // assertion
                
    const headline = page.getByRole ('heading',  { name: 'Ladies T-Shirts' })
    await expect(headline).toHaveText('Ladies T-Shirts')
                
    })    
})