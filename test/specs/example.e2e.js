import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin("ceyelo3970@naymio.com");
        LoginPage.setPassword("bart123");
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

});



