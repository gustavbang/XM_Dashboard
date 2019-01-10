import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';


describe('buzy E2E', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('buzy');
  });

  it('should display buttons', () => {
    page.navigateTo();
    expect(page.getWeatherButton().getText()).toEqual('Weather');
    expect(page.getRecipesButton().getText()).toEqual('Groceries');
  });


  it('should route to weather page', () => {
    page.navigateTo();
    page.getWeatherButton().click();    
    element(by.id('username')).sendKeys('gustav10');
    element(by.id('password')).sendKeys('topsecretpassword');
    page.getLoginButton().click();
  });
});
