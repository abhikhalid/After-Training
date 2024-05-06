var business = 450;
var minister = 350;
var sochib = 550;

if (business > minister)
{
    if (business > sochib)
    {
        console.log("Business is bigger");
    }
    else
    {
        console.log("Sochib is bigger");
    }
}

else
{
    console.log("Minister is bigger");
}

//or

var max = Math.max(business, minister);

console.log(max);