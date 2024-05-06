function factorial(n)
{
    var factorial = 1;

    for (var i = 1; i <= n; i++)
    {
        factorial *= i;
    }

    return factorial;
}

console.log(factorial(3));
