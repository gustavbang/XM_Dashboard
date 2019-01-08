import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('XM-Dashboard');
  });

  it('should display buttons', () => {
    page.navigateTo();
    expect(page.getWeatherButton().getText()).toEqual('Weather');
    expect(page.getBTCButton().getText()).toEqual('CryptoCurrency');
    expect(page.getRecipesButton().getText()).toEqual('Recipes');
  });


  it('should route to weather page', () => {
    page.navigateTo();
    page.getWeatherButton().click();    
    element(by.id('username')).sendKeys('gustav10');
    element(by.id('password')).sendKeys('codename');
    page.getLoginButton().click();
  });
});
