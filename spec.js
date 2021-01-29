

//To write our code

const { element, browser } = require("protractor");


describe('Enter name feature', function() {
    it('Should enter name as Tom', function() {
      browser.get('https://angularjs.org/');
      element(by.model('yourName')).sendKeys('Tom');
      var text_displayed=element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'))
      expect(text_displayed.getText()).toEqual('Hello Tom!')
      
      
    });

  });

describe('Angular App 2',function()
{
  it('get angular app 2 title',function()
  {
    //we are taking both angular js apps
    browser.get('https://juliemr.github.io/protractor-demo//')
    expect(browser.getTitle()).toEqual('Super Calculator');
    browser.driver.sleep(3000)
    element(by.model('first')).sendKeys(1)
    element(by.model('second')).sendKeys(2)
    element(by.id('gobutton')).click()
    expect(element(by.className('ng-binding')).getText()).toEqual('3')
  });

});
