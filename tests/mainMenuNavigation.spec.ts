import {test, expect} from '@playwright/test'



// Menu navigation starts 

test('navigate to Mens Outerwear page', async ({page}) => {

    await page.goto('https://shop.polymer-project.org/')

    await page.click('text=Men\'s Outerwear');

    // assertion
    
    const headline1 = page.getByRole ('heading',  { name: 'Men\'s Outerwear' })
    await expect(headline1).toHaveText('Men\'s Outerwear')
    
    

    // navigation to Ladie's Outerwear page 

    await page.click('text=Ladies Outerwear');


        
    // assertion
        
    const headline2 = page.getByRole ('heading',  { name: 'Ladies Outerwear' })
    await expect(headline2).toHaveText('Ladies Outerwear')
        
    

    // navigation to Men's T-Shirts page 

    await page.click('text=Men\'s T-Shirts')

            
    // assertion
            
    const headline3 = page.getByRole ('heading',  { name: 'Men\'s T-Shirts' })
    await expect(headline3).toHaveText('Men\'s T-Shirts')
            
    

    // navigation to Ladie's T-Shirts page 

    await page.click('text=Ladies T-Shirts')

                
    // assertion
                
    const headline4 = page.getByRole ('heading',  { name: 'Ladies T-Shirts' })
    await expect(headline4).toHaveText('Ladies T-Shirts')
                
})