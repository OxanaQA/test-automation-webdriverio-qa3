import basePage from './base.page';
import sel from '../selectors/login';
import exp from '../expected/login';

class loginPage extends basePage {

  emailField () {
    return $(sel.email)
  }

  emailLength () {
    return exp.emailMax
  }

  login () {
    //code will be here
  }
}

export default new loginPage();