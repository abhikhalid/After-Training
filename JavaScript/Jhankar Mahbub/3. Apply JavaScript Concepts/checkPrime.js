function checkPrime(n)
{
    for (var i = 2; i < n; i++)
    {
        if (n % i == 0) return false;
    }

    return true;
}

function checkPrimeRecursive(n,i)
{
    if (n == 2 || n==i) return true;

    if (n % i == 0) return false;

    return true * checkPrimeRecursive(n, i + 1);
} 