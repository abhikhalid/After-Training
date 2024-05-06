const normalPerson = {

    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,

    //method
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function (amount) {
        this.salary = this.salary - amount;

        return this.salary;
    }
}

// console.log(normalPerson);
// console.log(normalPerson.firstName);

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




const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);

heroChargeBill(2000);
heroChargeBill(3000);

console.log(heroPerson.salary); //20000
console.log(normalPerson.salary); //15000000


const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);

friendlyChargeBill(1500);