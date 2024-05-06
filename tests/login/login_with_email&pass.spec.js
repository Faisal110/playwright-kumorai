const {test, expect} =  require('@playwright/test')
// const loginData = require('../../fixtures/login_data/user.json')
const { LoginPage } = require('../../pages/logins/custom-login')

test('Login Test', async ({page}) => {

   const login = new LoginPage(page)

   await page.goto('/')

   await login.login('faisal.abbas@kumorai.com', 'admin123-A')

   await expect(page).toHaveURL('/dashboard');

});