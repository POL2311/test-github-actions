import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';
import { InventoryPage } from './pageobjects/InventoryPage';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('open a website page',async({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx');
  
  await page.locator('input[id=\'cb1-edit\']').fill('iphone')
  await page.keyboard.press('Enter')
  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible()
  await page.pause()
  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h3').allInnerTexts()
  console.log('la cantidad de titulos son: ', titles.length)
  for(let title of titles)
  {
    console.log('the title is: ', title)
  }
  await page.locator('xpath=//input[@class="form"]').fill('algo')
  await page.getByRole('link',{name: 'Ingresa; exact:true'})
});

test('purchase a item', async({ page }) => {
  await page.goto("https://saucedemo.com")
  const lp = new LoginPage(page)
  lp.loginWithCredentials('standard_user','secret_sauce')
  const ip = new InventoryPage(page)
  const { name, description, price } = await ip.selectRandomProductFromInventory();
 // Localizador base

  await expect(page.getByRole('button', {name: 'Checkout'})).toBeVisible()
  const actualPrice = await page.locator('.inventory_item_price').innerText();
  const actualName = await page.locator('.inventory_item_name').innerText();
  const actualDescription = await page.locator('.inventory_item_desc').innerText();
  expect(actualName).toEqual(name)
  expect(actualDescription).toEqual(description)
  expect(actualPrice).toEqual(price)
  await page.getByRole('button', {name: 'Checkout'}).click()
  await page.getByRole('textbox', { name: 'First Name'}).fill('goku31')
  await page.getByRole('textbox', { name: 'Last Name'}).fill('goku1')
  await page.getByRole('textbox', { name: 'Zip/Postal Code'}).fill('11000')
  await page.getByRole('button', { name: 'Continue'}).click()
  await page.getByRole('button', { name: 'Finish'}).click()
  await expect(page.getByRole('heading',{name: 'Thank you for your order!'})).toBeVisible()

});

test('navigate to url from env', async({ page })=>{
  await page.goto(process.env.URL)
  await page.pause()
});