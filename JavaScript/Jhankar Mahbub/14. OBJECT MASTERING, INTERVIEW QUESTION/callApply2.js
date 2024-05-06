const normalPerson = {

    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function (amount,tips,tax) {
        this.salary = this.salary - amount -tips -tax;

        return this.salary;
    }
}

// console.log(normalPerson.chargeBill(150));
// console.log(normalPerson.chargeBill(3000));

// console.log(normalPerson.salary);


const heroPerson = {
    
    firstName: 'Hero',
    lastName: 'Balam',
    salary : 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary : 25000
}


normalPerson.chargeBill.call(heroPerson, 900,100,10);
normalPerson.chargeBill.call(heroPerson, 3000,300,30);

console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);

console.log(friendlyPerson.salary);

console.log(normalPerson.salary);