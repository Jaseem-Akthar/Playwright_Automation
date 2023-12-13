exports.vLoginPage = class vLoginPage {

    constructor(page) {
        this.page = page
        this.link_button = page.getByRole('link', { name: 'Log In' })
        this.mail_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Log In' })


    }

    async gotovLoginPage(){
        await this.page.goto('https://beta.vesume.net/');
    }






    async login(mail,password){
        await this.link_button.click()
        await this.mail_textbox.fill(mail)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }


}