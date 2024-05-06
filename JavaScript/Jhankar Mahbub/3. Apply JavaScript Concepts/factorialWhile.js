function factorial(n)
{
    var i = 1;

    var fact = 1;

    while (i <= n)
    {
        fact *= i;

        i++;
    }

    return fact;
}

console.log(factorial(3));