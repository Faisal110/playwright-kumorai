exports.LoginPage = class Login {
    constructor(page) {

        this.page = page

        this.emailField = page.getByLabel('E-Mail')
        this.passwordField = page.getByLabel('Password')
    }

    async login(email, password) {
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.page.click('button', { name: ' SIGN IN ' });
    }
}