// var inch = 30;

// var feet = parseInt(inch / 12);

// inch = inch % 12;

// console.log(feet + " feet " + inch + " inch");


function inchToFeet(inch)
{
    var feet = inch / 12;
    return feet;
}

var nanaFeet = inchToFeet(156);
console.log(nanaFeet);

var naniFeet = inchToFeet(288);

console.log(naniFeet);