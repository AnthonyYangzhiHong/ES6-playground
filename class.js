function Person(name){
	this.name = name;
	this.greeting = function(){
		alert("Hello, I'm " + this.name);
	}
}

var pesron1 = new Person("tom");
var person2 = new Person("jerry");

person1.greeting();
person2.greeting();