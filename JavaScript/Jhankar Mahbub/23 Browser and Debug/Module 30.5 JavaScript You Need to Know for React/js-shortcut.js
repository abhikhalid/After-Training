// const money = 150;

// let food;

// if (money > 100) {
// 	food = "biriyani";
// } else {
// 	food = "alur vorta";
// }

const money = 150;

const active = true;

//ternary 

let food = money > 100 ? 'biriyani' : 'alur vorta'; 


const cssClass = active ? 'active' : 'inactive';

//function call shortcut alternative

active ? displayUser() : hideUser();


//function call shortcut without alternative

active && displayUser()

active || displayUser()

const x = active && 5;
const y = active || 5;

// const number = '45';
const number = +'45'; //string to number e convert korlam

//number to string

const numText = 45 + '';

// console.log(number);

console.log(numText);

//////////////////////////////////////////////////////

// function add(num1, num2 = 5)
// {
    

//     return num1 + num2;
// }

// add(45, 10);

function add(num1, num2)
{   
    num2 = num2 || 5;

    return num1 + num2;
}

add(45, 10);