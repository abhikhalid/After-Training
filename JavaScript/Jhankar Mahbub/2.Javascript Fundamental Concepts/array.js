/*
var friendsAge = [15, 17, 14, 16];

var sonaliAge = friendsAge[2];

friendsAge[1] = 21;

var position = friendsAge.indexOf(14);

console.log(friendsAge);

// console.log(position);


// console.log(friendsAge.indexOf(141));

friendsAge.push(15);
friendsAge.push(19);

console.log(friendsAge);

friendsAge.pop();

console.log(friendsAge);



// console.log(friendsAge.length);

*/


//---------------------------------------------------------------------------

// var teaLine = ['Kalam', 'Salam', 'Balam'];

// teaLine.push('Jalam')

// console.log(teaLine);

// teaLine.pop();

// console.log(teaLine);


// teaLine.shift(); //removes element from the first

// console.log(teaLine);

// teaLine.unshift('Abhi'); //add element at the beginning

// console.log(teaLine);



//---------------------------------------------------------------------------

var teaLine = ['Palam', 'Kalam', 'Salam', 'Balam','Jalam','Talam'];

var part = teaLine.slice(2);

console.log(part); // Salam Balam Jalam Talam

part = teaLine.slice(2, 4);

console.log(part); // Salam Balam 