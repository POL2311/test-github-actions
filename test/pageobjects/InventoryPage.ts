import { Locator, Page } from "@playwright/test";

export class InventoryPage{
private readonly page
    constructor(page: Page){
        this.page = page
    }
    async selectRandomProductFromInventory(){
    const itemsLocator = this.page.locator('#inventory_container .inventory_item');
    await itemsLocator.first().waitFor({ state: 'visible' });
    const itemsContainer = await itemsLocator.all();
    const randomIndex = Math.floor(Math.random() * itemsContainer.length);
    const randomItem = itemsContainer[randomIndex];
    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText();
    const expectedName = await randomItem.locator('.inventory_item_name').innerText();
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText();
    console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription}`);
    await randomItem.getByRole('button',{name: 'Add to cart'}).click()
    await this.page.locator('a.shopping_cart_link').click()
    return {
            name: expectedName,
            description: expectedDescription,
            price: expectedPrice
        };    

    }
}