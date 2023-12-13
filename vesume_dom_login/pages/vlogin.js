exports.vLoginPage = class vLoginPage {

    constructor(page) {
        this.page = page
        this.link_button = page.getByRole('link', { name: 'Log In' })
        this.mail_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Log In' })
        this.error_Message = page.locator('Incorrect email or password')

    }

    async gotovLoginPage() {
        await this.page.goto('https://beta.vesume.net/');
    }

    async ErrorMessageVisible() {
        const error_Message = this.error_Message;
        return await error_Message.isVisible();
    }




    async login(mail, password) {
        await this.link_button.click()
        await this.mail_textbox.fill(mail)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        await this.error_Message.isVisible()
    }


}