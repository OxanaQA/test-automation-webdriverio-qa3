import { assert } from 'chai';
import loginPage from '../../pages/login.page';

describe('Login', function () {

  it('Header Visible', function () {
    loginPage.open();
    assert.isTrue(loginPage.headerDisplayed())
  });

  it('Footer Visible', function () {
    assert.isTrue(loginPage.footerDisplayed())
  });

  it('App Visible', function () {
    assert.isTrue(loginPage.appDisplayed())
  });

});

