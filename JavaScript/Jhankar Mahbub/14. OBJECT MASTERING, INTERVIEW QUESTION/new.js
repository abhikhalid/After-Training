class Person
{
    constructor(firstName, lastName, salary)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 2000);

console.log(heroPerson);

const friendlyPerson = new Person('Helo', 'Kalam', 25000);

console.log(friendlyPerson);


//before ES6, old code (don't follow it)

/*

 function Person1(firstName,lastName, salary)
 {
     this.firstName = firstName;
     this.lastName = lastName;
     this.salary  = salary;
 }

 const oldPerson  = new Person1('Grand','Papa',1200);

 console.log(oldPerson);









*/