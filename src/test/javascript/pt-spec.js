/*describe('Protractor Test', function() {
  it('should add a todo and access login', function() {    
    browser.get('https://angularjs.org');
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');
    
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);

 });
 //second test
  it('should open Tutorial page', function() {
     element.all(by.className('dropdown-toggle')).first().click();
     element(by.linkText('Tutorial')).click();
     expect(browser.getTitle()).toEqual('AngularJS: Tutorial: Tutorial');
 });
});*/


var homePage=require ('../../main/pageObjects/angularHomePage.js')

describe('Protractor Test', function() {
  it('should add a new item', function() {    
   var angularHome= new homePage();
	angularHome.getB();
	angularHome.addNewTask('write first protractor test');
	angularHome.clickAdd();
    expect(angularHome.countTodoListItems()).toEqual(3);
    expect(angularHome.getItemText(2)).toEqual('write first protractor test');
    angularHome.checkItem(2)
    expect(angularHome.countSelectedItems()).toEqual(2)
	});
 
 //second test
  it('should open Tutorial page', function() {
	 var angularHome= new homePage(); 
       angularHome.selectFirstMenuItem();
       angularHome.selectTutorial();
       expect(browser.getTitle()).toEqual('AngularJS: Tutorial: Tutorial2');
   })
});

