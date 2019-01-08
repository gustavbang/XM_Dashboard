import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getWeatherButton() {
    return element(by.css('[routerlink="weather"]'))
  }

  getBTCButton() {
    return element(by.css('[routerlink="btc"]'))
  }

  getRecipesButton() {
    return element(by.css('[routerlink="recipes"]'))
  }

  getLoginButton() {
    return element(by.id('btnLogin'))
  }
}
