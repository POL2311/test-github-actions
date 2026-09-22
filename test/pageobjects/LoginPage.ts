import { expect, Locator, Page } from "@playwright/test";

export class LoginPage{
    private readonly usernameTxtBox: Locator
    private readonly passwordTxtBox: Locator
    private readonly loginButton: Locator
    private readonly tittle:Locator
    private readonly page

    constructor(page: Page){
        this.usernameTxtBox = page.getByRole('textbox', { name: 'Username'})
        this.passwordTxtBox = page.getByRole('textbox', { name: 'Password'})
        this.loginButton = page.getByRole('button', { name: 'Login'})
        //this.tittle = page.locator('xpath=//*[@class=\'app_logo\']')
        this.tittle = page.getByText('Swag Labs')
        this.page = page

    }
    async fillUsername(username:string){
        await this.usernameTxtBox.fill(username)
    }
    async fillPassword(password:string){
        await this.passwordTxtBox.fill(password)
    }
    async clickOnLogin(){
        await this.loginButton.click({force:true});
    }
    async loginWithCredentials(username:string,password:any){
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }
    async accessLoginExcept(){
        await expect(this.page).toHaveURL(/.*inventory.html/);
    }
}

