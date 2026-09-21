import { Locator, Page } from "@playwright/test";

export class LoginPage{
    private readonly usernameTxtBox: Locator
    private readonly passwordTxtBox: Locator
    private readonly loginButton: Locator

    constructor(page: Page){
        this.usernameTxtBox = page.getByRole('textbox', { name: 'Username'})
        this.passwordTxtBox = page.getByRole('textbox', { name: 'Password'})
        this.loginButton = page.getByRole('button', { name: 'Login'})

    }
    async fillUsername(username:string){
        await this.usernameTxtBox.fill(username)
    }
    async fillPassword(password:string){
        await this.passwordTxtBox.fill(password)
    }
    async clickOnLogin(){
        await this.loginButton.click()
    }
    async loginWithCredentials(username:string,password:any){
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }
}

