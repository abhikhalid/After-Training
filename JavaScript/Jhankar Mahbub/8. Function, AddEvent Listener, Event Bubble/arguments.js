// function addNumbers(num1, num2)
// {
//     console.log(arguments);
//     console.log(arguments[3]);
    
//     var sum = 0;

//     for (let i = 0; i < arguments.length; i++)
//     {
//         const num = arguments[i];

//         sum += num;
//         console.log(num);
//     }

//     // argument.push(15) ; //not allowed

//     // return num1 + num2;
//     return sum;
// }

// var result = addNumbers(3, 5, 8,15);

// console.log(result);


function addNumbers(num1, num2)
{
    var sum = 0;

    // logInfo('Good Morning!'); it'll work in javascript but  not a professional way. 

    for(let i = 0; i < arguments.length; i++)
    {
        const num = arguments[i];
        sum += num;
    }
    
    function logInfo(message)
    {
        console.log(message);
    }

    logInfo('Good Morning!');

    return sum;
        
}

var result = addNumbers(3, 5, 8, 15);

console.log(arguments);