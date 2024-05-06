// function explain_callback(name,age,task)
// {
//     console.log('Hello ', name);
//     console.log('your age ', age);

//     washHand();
//     takeShower();

// }

// function washHand()
// {
//     console.log('wash hand with soap');
// }

// function takeShower()
// {
//     console.log('Take shower');
// }



// explain_callback('Sogir Uddin', 17);
// explain_callback('Jogir Uddin', 17);



//-------------------------------------------------------------------------------------



function explain_callback(name,age,task)
{
    console.log('Hello ', name);
    console.log('your age ', age);

    // console.log(task);

    task();

}

function washHand()
{
    console.log('wash hand with soap');
}

function takeShower()
{
    console.log('Take shower');
}

function scrollFacebook()
{
    console.log('Scroll facebook but dont like any post');
}



explain_callback('Sogir Uddin', 16, washHand);
explain_callback('Jogir Uddin', 19, takeShower);
explain_callback('mugir Uddin', 21, scrollFacebook);
