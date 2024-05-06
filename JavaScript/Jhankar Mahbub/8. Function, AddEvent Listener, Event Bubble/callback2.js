// function welcomeGuest(name, greetHandler)
// {
//     greetHandler(name);
// }



function greetMorning(name)
{
    console.log('Good Morning', name);
}

function greetEvening(name)
{
    console.log('Good Evening', name);
}

const actorName = 'Tom Hanks';

welcomeGuest(actorName, greetEvening);

welcomeGuest('Khalid Mahmud', greetMorning);



function handleClick()
{
    console.log('someone clicked me');
}

// document.getElementById('click').addEventListener('click',handleClick);

document.getElementById('click').addEventListener('click', function () {
    
    console.log('clicked me again...');
});