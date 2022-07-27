class Alien {
    constructor(name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = 'alien';
    }

    fly = () => console.log('Zzzzzziiiiiinnnnnggggg!!');
    sayPhrase = () => console.log(this.phrase);
}

const alien1 = new Alien('Ali', "I'm Ali the alien!");
const alien2 = new Alien('Lien', 'Run for your lives!');

console.log(alien1);
alien1.fly();
alien1.sayPhrase();
console.log(alien2);
alien2.sayPhrase();

// class Bug {
//     constructor(name, phrase) {
//         this.name = name;
//         this.phrase = phrase;
//         this.species = 'bug';
//     }
//     hide = () => console.log("You can't catch me now!");
//     sayPhrase = () => console.log(this.phrase);
// }

// class Robot {
//     constructor(name, phrase) {
//         this.name = name;
//         this.phrase = phrase;
//         this.species = 'robot';
//     }
//     transform = () => console.log('Optimus prime!');
//     sayPhrase = () => console.log(this.phrase);
// }

// const bug1 = new Bug('Buggy', "Your debugger doesn't work with me!");
// const bug2 = new Bug('Erik', 'I drink decaf!');
// const Robot1 = new Robot('Tito', 'I can cook, swim and dance!');
// const Robot2 = new Robot('Terminator', 'Hasta la vista, baby!');
