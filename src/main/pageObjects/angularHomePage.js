var angularHome=function (){
	//var toDoList = element.all(by.repeater('todo in todoList.todos'));
	var newTask = element(by.model('todoList.todoText'));
	var toDoListItems=element.all(by.repeater('todo in todoList.todos'));
	var addButton= element(by.css('[value="add"]'));
	var selectedItems=element.all(by.css('.done-true'));
	var parentMenuItems=element.all(by.className('dropdown-toggle'));
	
	
	this.getB = function(){
		 browser.get('http://www.angularjs.org');
	};
	
	this.addNewTask = function(task){
		newTask.sendKeys(task);
	};
	
	this.clickAdd = function(task){
		addButton.click();
	};
	
	this.countTodoListItems= function(){
		return toDoListItems.count();
	};
	
	this.countSelectedItems= function(){
		return selectedItems.count();
	};
	
	this.getItemText=function(itemNum){
		return toDoListItems.get(itemNum).getText();
	};
	
	this.checkItem=function(itemNum){
		return toDoListItems.get(itemNum).click();
	};
	
	this.selectFirstMenuItem= function() {
		parentMenuItems.first().click();
	};
	
	this.selectTutorial= function() {
	    var tutorialOption=element(by.linkText('Tutorial'));
		tutorialOption.click();
	};
};
module.exports =angularHome

