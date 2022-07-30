class Employee {                     // parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`I am ${this.name}I'm $ {this.age} years old`)
    }
}

class Programmer extends Employee {   // created programmer class. Extends makes Programmer to inherit the xtics of employee
    constructor(name, age, yearsOfExperience) {
        super(name, age);        // General to call 
        this.yearsOfExperience = yearsOfExperience;     // unique to child class - Programmer
    }
    code() {
        console.log(`${this.name} is coding`)
    }
}

let employee1 = new Employee("Dorris", 40)
console.log(employee1);

let programmer2 = new Programmer("John", 30, 8)
console.log(programmer2);

class Accountant extends Employee {
}

// class has 3 propoerties and 1 method. Child class with 2 extra propoerties and 1 method


class Requirements {
    constructor(pens, pencils, rulers){
        this.pens = pens;
        this.pencils = pencils;
        this.rulers = rulers;
    }
    describe() {
        console.log(`I was sent for ${this.pens}, ${this.pencils}, and ${this.rulers}`)
    }
}
class OtherRequirements extends Requirements {
    constructor(pens, pencils, rulers, stocks, rubber) {
        super(pens, pencils, rulers);
        this.stocks = stocks;
        this.rubber = rubber;
    }
    describe() {
        console.log(`I need ${this.stocks}I need a ${this.rubber}`);
    }
}

let schoolRequirements = new Requirements("2 dozens of Bic", "1 box of Nataraj", "3 rulers")
console.log(schoolRequirements);

let additionalRequirements = new OtherRequirements("2 dozens of Bic", "1 box of Nataraj", "3 rulers", "2 pairs of Bata", "1 chinese")
console.log(additionalRequirements);
