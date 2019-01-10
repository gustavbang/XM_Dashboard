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

  getRecipesButton() {
    return element(by.css('[routerlink="groceries"]'))
  }

  getLoginButton() {
    return element(by.id('btnLogin'))
  }
}
