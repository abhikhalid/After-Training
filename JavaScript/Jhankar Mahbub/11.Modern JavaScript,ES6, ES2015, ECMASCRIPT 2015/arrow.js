// function doubleIt(num)
// {
//     return num * 2;
// }

// const doubleIt = function (num)
// {
//     return num * 2;
// }

//or

// const doubleIt = function myFun(num)
// {
//     return num * 2;
// }

//or

const doubleIt = num => num * 2;

const add = (num1, num2) => num1 + num2;

const give6 = () => 6;

const doMath = (x, y) => {

    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;

    return result;
}


const result = doubleIt(30);

const result2 = add(10, 2);

const result3 = doMath(7, 5);


console.log(result);
console.log(result2);

console.log(give6());