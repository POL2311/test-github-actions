import {expect,test as setup} from '@playwright/test'
import { LoginPage } from './pageobjects/LoginPage';
const authFile = "playwright/.auth/user.json";
setup("authenticate", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    const lp = new LoginPage(page)
    await lp.loginWithCredentials('standard_user','secret_sauce')
    await lp.accessLoginExcept()
    await page.context().storageState({path: authFile})
})