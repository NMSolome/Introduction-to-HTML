// // Cannot be redeclared
// const x = 5
// const x = 6

// // must be assigned
// const y = 67
// const y;
// y = 67

const fruits = ["Mangoes", "Pawpaws", "Oranges"]
//change an element
fruits[0] = "Jackfruit"
//add an element by pushing
fruits.push("Apples")
console.log(fruits)

// cannot reassign the whole Array
// fruits = [...............]

// Objects
const Solome = {gender:"Female", height:"172", size:"16"}
// change a property
Solome.size="19";
Solome.shoeSize="40";
console.log(Solome);

// Block scope
const p = 16
{
    const p = 20
}

var x = 6
 x = 7

 