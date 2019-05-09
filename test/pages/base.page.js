import sel from '../selectors/base';
import exp from '../expected/base';

export default class basePage {

  open () {
    browser.url('/')
  }

  pageTitle () {
    return browser.getTitle() === exp.pageTitle
  }

  favicon () {
    browser.url(sel.faviconUrl);
    let width = $(sel.favicon).getCSSProperty('width').parsed.value;
    let height = $(sel.favicon).getCSSProperty('height').parsed.value;
    let size = `${width}x${height}`;
    return size === exp.favicon
  }

  headerDisplayed () {
    return $(sel.header).isDisplayed()
  }

  footerDisplayed () {
    return $(sel.header).isDisplayed()
  }

  appDisplayed () {
    return $(sel.app).isDisplayed()
  }

  enterTextToField (field, value) {
    return field.addValue(value)
  }

  getTextFromField (field) {
    return field.getValue()
  }

  clearField (field) {
    return field.clearValue()
  }

}
