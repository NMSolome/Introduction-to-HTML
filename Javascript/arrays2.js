let numbers = []
console.log(numbers)
//Adding elements to numbers array
numbers.push(1,2,3,4)
console.log(numbers)
//                0         1       2       3
let students =["Solome", "Annah", "Liz", "Mark"]
// //Determining the number of elements in an array
// console.log(students.length)
// //replacing elements in an array
// students.splice(1,1, "Asiimwe")
// // students.push("Edwin", "Irene", "Mohammed")
// // console.log(students.length)
// //Adding an element which is not at the begining or end
// students.splice(1,2, "Asiimwe")
// //removing an element at any index of the array
// // students.splice(1,1)
// // console.log(students)
// // students.splice(1,2)
// console.log(students)

console.log(students[0]) //Solome

// returns an index of where a particular is located in the array
const elementIndex = students.findIndex(element => element == "Annah")
students.splice(elementIndex, 1)
console.log(students)

//ways of writing a function
function sumNumbers(){
    // Write all logic
    // return num;
}
console.log('first fn ' + sumNumbers(10));

// Arrow function
//const sumNumbersWithArrowFn = () => {
    //return num;
// }
console.log('second fn ' + sumNumbersWithArrowFn(10));

// Arrow functions
// Wrap line 7 into a function that takes a parameter,
// which is the student name and return the index

// const elementIndex = students.findIndex(element => element == "Annah")