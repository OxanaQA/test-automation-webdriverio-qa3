import loginPage from '../../pages/login.page';
import { assert } from 'chai';

describe('Client', function () {

  describe('Page Level', function () {

    it('Title', function () {
      loginPage.open();
      assert.isTrue(loginPage.pageTitle());
    });

    it('Favicon', function () {
      assert.isTrue(loginPage.favicon());
    })

  });

  describe('Elements visible', function () {

    it('Header', function () {
      loginPage.open();
      assert.isTrue(loginPage.headerDisplayed())
    });

    it('Footer', function () {
      assert.isTrue(loginPage.footerDisplayed())
    });

    it('App', function () {
      assert.isTrue(loginPage.appDisplayed())
    });

  });

});