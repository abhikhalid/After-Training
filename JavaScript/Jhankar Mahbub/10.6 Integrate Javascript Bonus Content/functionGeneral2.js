//Global vs local variable IIFE function expression vs declaration



// function addUser() {
// 	romanticName = "Jantoos";
// 	console.log(romanticName);
// }

// addUser();

// Javascript IIFE ( Javascript Immediately Invoked Function Expression)

(function addUser() {
	romanticName = "Jantoos";
	console.log(romanticName);
})();

(function () {
	romanticName = "Jantoos";
	console.log(romanticName);
})();

//google search 'function declaration vs function expression'

//function declaration

function addTodo(task) {
	const newTaskElement = document.createElement("li");
}

//function expression

var myTodo = function (task) {
    
};
