function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

var result = factorial(5);

console.log('result', result);


function factorialRecursice(num) {
    if (num == 1) return 1;

    return num * factorialRecursice(num - 1);
}