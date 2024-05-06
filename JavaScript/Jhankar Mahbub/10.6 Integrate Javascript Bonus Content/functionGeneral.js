//Global vs local variable IIFE function expression vs declaration

function addTodo(task) {
	const newTaskElement = document.createElement("li");

	//here, 'newTaskElement' is a local variable.
}

var name = "Rashed"; // name is a global variable.
 
function addUser() {

    var romanticName = 'Jantoos';

	console.log(name); 
}

// console.log(romanticName);  error
addUser();