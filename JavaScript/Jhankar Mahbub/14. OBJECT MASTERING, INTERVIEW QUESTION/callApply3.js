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


normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);

console.log(heroPerson.salary);