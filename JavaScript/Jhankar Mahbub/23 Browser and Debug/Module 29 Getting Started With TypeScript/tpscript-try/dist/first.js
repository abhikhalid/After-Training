"use strict";
// let myMoney = 50;
// // myMoney = 100; ok
// // myMoney = 'Fifty Taka'; error
// // myMoney = false; error
// myMoney = 0;
//////////////////////////////////
// typescript e evabe variable decalre korba
let age;
age = 40;
let club = 'Real Madrid';
// age = '100 bosor'; error
console.log(club);
// const isFamous: boolean; mind korbe karon tmy value set koro ni
let famous;
// function add(num1, num2)
// {
//     return num1 + num2;
// }
// add(3, 76);
// add('Adam', 'Sand');
// function add(num1: number,num2:number)
// {
//     return num1 + num2;
// }
// add(3, 76);
// add('Adam', 'Sand'); complain korbe
function add(num1, num2) {
    // return num1 + num2;   
}
add(3, 76);
add('Adam', 'Sand');
add(3, 'Someone');
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Khalid', 'Mahmud');
console.log(user);
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);
