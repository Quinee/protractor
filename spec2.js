describe('Describe is a test suite that contains multiple test cases',function()
{
    var first_num=element(by.model('first'))
    var second_num=element(by.model('second'))
    var go_button= element(by.id('gobutton'))
    var result=element(by.className('ng-binding'))
    //beforeEach is provided by Jasmine Framework which runs the fxn before each of the test cases(specs) in the test suite(describe)
    //is called i.e. beforeEach will be executed befre every IT block
    beforeEach(function()
    {
        browser.get('https://juliemr.github.io/protractor-demo//')
    });
    //IT is a keyword in Jasmine framework which represents a test case
    //TC_1
    it('It should have a title',function()
    {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
    //TC_2
    it('should add one and two',function()
    {
        first_num.sendKeys(1)
        second_num.sendKeys(1)
        go_button.click()
        expect(result.getText()).toEqual('2')
    });
    //TC_3
    it('should add four and six',function()
    {
        first_num.sendKeys(4)
        second_num.sendKeys(6)
        go_button.click()
        expect(result.getText()).toEqual('10')
    });


});