const hubby = "Elias Kanchon";

// hubby = "omar sunny"; //not allowed 
console.log(hubby);

const numbers = [12, 45];

numbers[1] = 88; //allowed

numbers.push(12);

console.log(numbers);

// numbers = ["Sunny", "Salman", 'Omit Hasan']; // not allowed

console.log(numbers);

const nayok = { name: "sakib khan", phone: 4578 };

console.log(nayok);



let patientName = "Rahim Chacha";

patientName = "Fatema Khala";

console.log(patientName);

// var sum = 0;

// for (var i = 0; i < 10; i++)
// {
//     sum += i;
// }
// console.log(i); // 10, problem? right?

let sum = 0;

for (let i = 0; i < 10; i++)
{
    sum += i;
}

console.log(i); //error , let is a scoped variable