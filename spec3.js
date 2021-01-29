const { element } = require("protractor");

describe('Get list of elements',function()
{
    var first_num=element(by.model('first'))
    var second_num=element(by.model('second'))
    var go_button= element(by.id('gobutton'))
    var result=element(by.className('ng-binding'))
    var history=element.all(by.repeater('result in memory'))
    //beforeEach is provided by Jasmine Framework which runs the fxn before each of the test cases(specs) in the test suite(describe)
    //is called i.e. beforeEach will be executed befre every IT block
    beforeEach(function()
    {
        browser.get('https://juliemr.github.io/protractor-demo//')
    });
    function add(a,b)
    {
        first_num.sendKeys(a)
        second_num.sendKeys(b)
        go_button.click()
    }
    it('Check the history',function()
    {
        add(1,2)
        add(2,2)
        expect(history.count()).toEqual(2)
    })
});