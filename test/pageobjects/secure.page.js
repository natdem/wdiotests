import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('normal_login_email') }
    get inputPassword () { return $('normal_login_password') }
    get buttnSubmit () { return $('.login_email') }
}

export default new SecurePage();
