import {test,expect} from '@playwright/test';
test('test web table', async({ page}, testInfo) => {
    await page.goto('https://cosmocode.io/automation-practice-webtable')
    const tableContainer = await page.locator('xpath=//table[@id=\'countries\']')
    const rows = await tableContainer.locator("xpath=.//tr").all()
    const countries: Country[] = []
    console.log(rows.length)
    await testInfo.attach('login',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })
    for(let row of rows){
        let country: Country= {
            name: await row.locator('xpath=.//td[2]').innerText(),
            capital: await row.locator('xpath=.//td[3]').innerText(),
            currency: await row.locator('xpath=.//td[4]').innerText(),
            primaryLanguage: await row.locator('xpath=.//td[5]').innerText(),
        }
        countries.push(country)
    }
    for(let pepito of countries){
        console.log(pepito)
    }

    let countriesWherePeopleSpeakPortuguese = countries.filter(country => country.primaryLanguage === 'Portuguese')
    console.log('countries where people speak portuguese', countriesWherePeopleSpeakPortuguese)
    const row1 = rows.at(1)
    const countryName = await row1?.locator('xpath=.//td[2]').innerText()
    const countryCapital = await row1?.locator('xpath=.//td[3]').innerText()
    const countryCurrency = await row1?.locator('xpath=.//td[4]').innerText()
    console.log(countryName,countryCapital,countryCurrency)
    await page.screenshot({path: 'screenshot/login.png', fullPage: true})
})

interface Country{
    name: string
    capital:string
    currency:string
    primaryLanguage:string
}