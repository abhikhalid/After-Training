// let myMoney = 50;

// myMoney = 100; ok

// myMoney = 'Fifty Taka'; error


// myMoney = false; error

// myMoney = 0;



//////////////////////////////////

// typescript e evabe variable decalre korba

let age:number;

age = 40;

let club: string = 'Real Madrid';

// age = '100 bosor'; error

console.log(club);

// const isFamous: boolean; mind korbe karon tmy value set koro ni

let famous: boolean;

// function add(num1, num2)
// {
//     return num1 + num2;
// }

// add(3, 76);

// add('Adam', 'Sand');

// function add(num1: number,num2:number)
// {
//     return num1 + num2;
// }

// add(3, 76);
// add('Adam', 'Sand'); complain korbe


function add(num1: number | string,num2:number | string)
{
    // return num1 + num2;   
}

add(3, 76);

add('Adam', 'Sand');

add(3, 'Someone');


function fullName(firstName: string, lastName: string) :string
{
    return firstName + ' ' + lastName;   
}


const user = fullName('Khalid', 'Mahmud');

console.log(user);



function doubleItAndConsole(num: number):void
{
    const result = num * 2;
    console.log(result);
}

const output = doubleItAndConsole(10);

console.log('output', output);


//arrow function

const multiply = (x: number, y: number): number => x * y;


console.log(multiply(3, 4));

//or

let multiply2: (x: number, y: number) => number;

multiply2 = (x, y) => x * y;


const numbers: number[] = [2, 3, 4, 8, 12, 91, 34];

numbers.push(22);

// numbers.push('Khalid Mahmud'); not allowed



const friends: string[] = ['George', 'Jeff', 'Bill', 'Aabdul'];

let megaName:string = '';

for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    
    if (friend.length > megaName.length)
    {
        megaName = friend;
    }
    
}

console.log('Friend with the largest name', megaName);


// object
const friend = {
    name: 'Khalid Mahmud',
    age: 25,
}

friend.age = 18;
// friend.age = 'ten years old'; error

/////////////////////////////

let friend: {
    name: string;
    age: number;
} = {
    name: 'Khalid Mahmud',
    age: 61
}

/////////////////////////////////////

let player : {
    club: string,
    salary : number
}

player = {
    club: 'Real Madrid',
    salary: 1341344
}

//////////////////////////////

// interface (kinda structure) - can be reused

interface Player{
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messy: Player = {
    
    name: 'Messy',
    club: 'Real Madrid',
    salary: 4344342,
    wife: 'Some name',
    isPlaying: true
}

const ronaldo: Player = {
    
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 5100000,
    isPlaying: true
}

function getBonus(player:{salary: number})
{
    return player.salary * 0.1;
}

const poorPlayer = { salary: 10000 }

getBonus(poorPlayer)

getBonus(messy) //ok




////////////////////////////////////

function getBonus2(player:{age: number})
{
    return player.age * 0.1;
}

const poorPlayer1 = {age: 50, salary: 10000 }

getBonus(poorPlayer1)

////////////////////////////////////

function getBonus3(player: Player)
{
    return player.salary * 0.1;
}

getBonus3(messy) //ok

////////////////////////////////////

function getBonus4(pkayer: Player, friends: string[])
{
    return player.salary * 0.1;
}

getBonus4(messy, ['Khalid', 'Robin', 'Saif', 'Suvo']);


//Class

class Person
{
    //public
    name: string;

    private _partner: string;

    readonly fatherName: string
    
    constructor(name : string,father: string)
    {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }

    getName(): string{
        return this.name + '' + this._partner;
    }
}

const sam = new Person('Samuel','David');


console.log('name',sam.name,sam.fatherName);
// console.log('name',sam._partner);  not allowed



const samName: string = sam.getName();

sam.name = 'Khalid';

// sam.fatherName = 'Ben Carson'; not allowed because read only. only dekhte parba

