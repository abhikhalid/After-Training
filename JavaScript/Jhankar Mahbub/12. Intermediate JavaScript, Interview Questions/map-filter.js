// const numbers = [3, 4, 5, 6, 7, 8];

// const output = [];

// for (let i = 0; i < numbers.length; i++)
// {
//     const element = numbers[i];

//     const result = element * element;

//     output.push(result);
// }

// console.log(output);


//---------------------------------------------------------------------

// const numbers = [3, 4, 5, 6, 7, 8];


// numbers.map(function (element) {
    
//     console.log(element);

// })

//------------------------------------------------------------

// const numbers = [3, 4, 5, 6, 7, 8];


// numbers.map(function (element,index) {
    
//     console.log(element,index);

// })


//------------------------------------------------------------


// const numbers = [3, 4, 5, 6, 7, 8];


// numbers.map(function (element,index,array) {
    
//     console.log(element,index,array);

// })


//------------------------------------------------------------

/*
const numbers = [3, 4, 5, 6, 7, 8];

function square(element)
{
    return element * element;
}

const square1 = element => element * element;

const square2 = x => x * x;


const result1 =  numbers.map(function (element) {
    
    return element * element;

})

console.log(result1);


const result2 = numbers.map(element => element * element);

console.log(result2); */



//------------------------------------------------------------

//Filter (filter ba olpo kisu select korar jonno)

//filter ekta array return kore

/*
const numbers = [3, 4, 5, 6, 7, 8];

const bigger = numbers.filter(x => x > 5);

console.log(bigger);

*/


//Find

//judi codition true hoy, oi element ke diye dibe

const numbers = [3, 4, 5, 6, 7, 8];

const isThere = numbers.find(x => x > 5);

console.log(isThere);


//map, filter  ekta array traverse kore ekta array return korbe

//find ekta array traverse kore element return korbe