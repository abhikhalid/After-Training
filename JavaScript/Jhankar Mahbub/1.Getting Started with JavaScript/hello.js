console.log("Hello World!");

//variable

var bananaPrice = 12;

console.log(bananaPrice); // 12

var seenAfter = 21;

console.log(typeof seenAfter); //number

var name = "Khalid Mahmud";

console.log(typeof name); // string

var isHot = true;
var isRich = false;

console.log(typeof isHot); // boolean

//string

var promise = "I promise I will work hard to become a programmer";

console.log(promise.toLowerCase());
console.log(promise.toUpperCase());

console.log(promise.indexOf("willl")); //-1

console.log(promise.indexOf("will")); // 12

console.log(promise.split("I"));

//number

var number1 = 25;
var number2 = 15.5;

console.log(number1 + number2); //40.5

var number3 = "25";
var number4 = "15.5";

console.log(number3 + number4); //2515.5

var number5 = 25;
var number6 = "15.5";

console.log(number5 + number6); // 2515.5

var number7 = 25;
var number8 = "15.5";

number8 = parseInt(number8);

console.log(number7 + number8); // 40

var x = 10;

console.log(x); //10
console.log(typeof x); //number

x = "" + 10;

console.log(x); //10
console.log(typeof x); //string

//--------------------------------------------------------------------

//Float

var number1 = 0.1;
var number2 = 0.2;

var total = number1 + number2;

total = total.toFixed(5);

console.log(total);


var date = new Date();

console.log(date);


var date = new Date('1996-07-14');

console.log(date);