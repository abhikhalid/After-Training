var numbers = [45, 65, 78, 12, 3, 54, 65];

function getArraySum(numbers)
{
    var sum = 0;

    for (var i = 0; i < numbers.length; i++)
    {
        var element = numbers[i];
        sum += element;
    }
    
    return sum;
}

console.log("total of the numbers : ",getArraySum(numbers));