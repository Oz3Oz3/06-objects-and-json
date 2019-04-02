console.log("monkey.js loaded");

var Monkey = function (Name, species) {
	this.Name = Name;
	this.species = species;
	this.foodEaten = [];
	console.log('Monkey process started');
}


Monkey.prototype.eatSomething = function(food) {
	this.foodEaten.push(food);
}

Monkey.prototype.introduce = function() {
	console.log($(this.Name) + " is " + $(this.species) + " Eats " + $(this.foodEaten));
}



var Gurilla = new Monkey ('Gorilla','Mammals');
var Baboon = new Monkey ('Baboon','Mammals');
var Ape = new Monkey ('Ape','Mammals');
var Apple = new eatSomething('Apple');
Banana.eatSomething;
var Banana = new eatSomething('Banana');
var insect = new eatSomething('insects');