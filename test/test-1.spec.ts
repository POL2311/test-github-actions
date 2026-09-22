import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');
  await page.locator('button').filter({ hasText: 'Página 6' }).click();
await page.locator('button').filter({ hasText: 'Página 6' }).click();
await page.getByRole('link', { name: 'Cómo te protegemos' }).click();
})

test('purchase a item 2', async({page})=>{
  await page.goto("https://www.saucedemo.com/inventory.html")
  const itemsContainers = await page.locator("#inventory_container .inventory_item").all()
  for(let container of itemsContainers){
    console.log(await container.allTextContents());
  }
  page.screenshot({path: "login.png",fullPage: true})

});
test('purchase a item 3', async({page})=>{
  await page.goto("https://www.saucedemo.com/inventory.html")
  const itemsContainers = await page.locator("#inventory_container .inventory_item").all()
  for(let container of itemsContainers){
    console.log(await container.allTextContents());
  }
  page.screenshot({path: "login.png",fullPage: true})

});
test('purchase a item 4', async({page})=>{
  await page.goto("https://www.saucedemo.com/inventory.html")
  const itemsContainers = await page.locator("#inventory_container .inventory_item").all()
  for(let container of itemsContainers){
    console.log(await container.allTextContents());
  }
  page.screenshot({path: "login.png",fullPage: true})

});