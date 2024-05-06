const person = {
	name: "Jack William",
	age: "17",
	job: "facebooker",
	gfName: "Ema Watson",
	address: "kochu khet",
	phone: "01717112211",
	friends: ["Tom hancks", "Tom Cruise", "Tom yarn"],
};

// const gfName = person.gfName;

// const phone = person.phone;

const { phone } = person;

const {gfName}  = {
	name: "Jack William",
	age: "17",
	job: "facebooker",
	gfName: "Ema Watson",
	address: "kochu khet",
	phone: "01717112211",
	friends: ["Tom hancks", "Tom Cruise", "Tom yarn"],
};

console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);


const friends = ['Sakib Khan', 'Arman Khan', 'Aamir khan', 'Salman Khan', 'Shahrukh Khan'];

// const [chotoFriend] = friends;

// console.log(chotoFriend); //Sakib khan

// const [chotoFriend,nextFriend] = friends;

// console.log(chotoFriend, nextFriend); //Aamir khan


const [chotoFriend, ...restFriends] = friends;

console.log(restFriends);


const complexObject = {

    name: 'abc',
    
    info: {
        address: 'kola bagan',
        leader : 'Tiger Leader'
    }
}

const { leader } = complexObject.info;