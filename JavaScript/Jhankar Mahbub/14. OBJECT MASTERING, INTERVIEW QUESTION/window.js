var name = 'Kuddus';

function add(num1, num2)
{
    result = num1 + num2; //kisu boli ni (let/var) tay implicitly global hoye gese
    
    // window.result = num1 + num2; //window te result add kore global kore deua. (not recommended)

    // var result = num1 + num2; 

    // console.log("result inside", result);
    
    // console.log('name inside ', name);


    function double(num)
    {
        return num * 2;
    }

    var total = double(result);

    return total;
}

// console.log('result outside', result);  error (result is not defined)

console.log('name outside', name);

// console.log(sum); error dibe. (result is not defined) because, add() ke ekhono call kora hoy ni

var sum = add(13, 21);

console.log(sum);

console.log('result outside', result);