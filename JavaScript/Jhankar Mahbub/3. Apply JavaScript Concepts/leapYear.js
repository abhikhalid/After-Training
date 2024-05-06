const year = 3998;

let remainder = year % 4;

if (remainder == 0)
{
    // console.log("Your year is a Leap Year");
    return true;
}
else
{
    // console.log("Your year is not a Leap Year");
    return false;
}