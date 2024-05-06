let bonus = 20;

function sum(first, second)
{
    let result = first + second + bonus;

    // console.log(result);
    // console.log(bonus);

    if (result > 9)
    {
        const mood = "happy";
        // var mood = "happy"; hoisting
        console.log(mood);
    }
    
    // console.log(mood); error

    console.log(day); //undefined, bcoz...

    var day = "friday"; // hoisting korle sudhu declaration part ta ke tene upore niye jabe. value nibe na.

    


    return result;
}

const output = sum(3, 7);

// console.log(result);    error

// console.log(bonus);
// console.log(output);


//let and constant hosse scoped variable.


//var variable parent scope e tene declaration niye jay. (Hoising)  