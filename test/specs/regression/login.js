import loginPage from '../../pages/login.page';
import { assert } from 'chai';

describe('Login', function () {

  describe('Email', function () {

    it('Max Characters', function () {
      loginPage.open();
      loginPage.enterTextToField(loginPage.emailField(), 'W'.repeat(loginPage.emailLength()));
      let actual = loginPage.getTextFromField(loginPage.emailField()).length;
      loginPage.clearField(loginPage.emailField());
      assert.equal(actual, loginPage.emailLength());
    });

    it('Max Characters + 1', function () {
      loginPage.enterTextToField(loginPage.emailField(), 'W'.repeat(loginPage.emailLength() + 1));
      let actual = loginPage.getTextFromField(loginPage.emailField()).length;
      assert.equal(actual, loginPage.emailLength());
    });

  });

});