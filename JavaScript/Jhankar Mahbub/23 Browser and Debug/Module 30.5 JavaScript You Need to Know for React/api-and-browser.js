//JSON

const person = {
	name: "Khalid",
    age: 25,
    district: 'Pabna',
    salary: 40000
};

// console.log(JSON.stringify(person));

const data = JSON.stringify(person);

// console.log(data.name); reference error

const dataParsed = JSON.parse(data);

console.log(dataParsed.name);

//API Fetch

// fetch("url")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));


//local storage

localStorage.setItem('userId', 1245);


const userId = localStorage.getItem('userId');

console.log(userId);

localStorage.setItem('person', JSON.stringify(person));

const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);

console.log(parsedPerson.age);

const keys = Object.keys(parsedPerson);

console.log(keys);

const values = Object.values(parsedPerson);

console.log(values);