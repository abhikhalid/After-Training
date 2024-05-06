//When and how to use arguments in a function

// function getFullName(fistName, lastName) {
//     const fullName = fistName + " " + lastName;

//     return fullName;
// }

function getFullName(fistName, lastName) {

    console.log(arguments);

    let fullName = '';

    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];

        fullName += ' ' + namePart;

    }

    return fullName;
}

const name = getFullName(
    "omuk",
    "songket",
    "bin",
    "Hanif",
    "songket",
    "Poribohon"
);

console.log(name);
