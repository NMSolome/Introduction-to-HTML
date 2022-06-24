const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  console.log(materials.map(material => material.length));

// Arrow function
// let sum =(num1, num2) => {
//     return num1 + num2
// }
// console.log(sum(8,4))

// sum =(num3, num4) => {
//     return num4 + num3
// }
// console.log(sum(9,10))

// function multiply(num){
//     return num * num
// }

// console.log(multiply(3))

// const multiply = (num) => {
//     return num * num
// }
// console.log(multiply(3))

// const elementIndex = students.findIndex(element => element == "Annah")
// const multiply = (num) => num * num

// console.log(multiply(3))
// If an arrow function takes in only one parameter to say num, you can ignore the parenthesis
// const multiply = num => num * num
// element => element * element
// console.log(multiply(3))

//Dealing with morethan one parameter with arrow functions
// const multiply = (num1, num2) => num1 * num2
// console.log(multiply(4,4))

// const multiply = (num1, num2, num3, num4, num5) => num1 * num2 * num3 * num4 * num5
// console.log(multiply(4,4,4,4,4))

// Dealing with multiple statements in an arrow function block
// const bodmas = (num1, num2, num3, num4, num5) => {
//     const product = num1 * num2 
//     const sum = num3 + num4 + num5
//     const subtraction = product - sum
//     return subtraction
// } 
// console.log(bodmas(8,7,6,5,4))

// const bodmas = (num1, num2, num3, num4, num5) => {
//     return (num1 * num2) - (num3 + num4 + num5)
//     } 
// console.log(bodmas(8,7,6,5,4))

// const bodmas = (num1, num2, num3, num4, num5) => (num1 * num2) - (num3 + num4 + num5)
// console.log(bodmas(8,7,6,5,4))

// Dealing with function parameters that have default values: when assigned it uses new value: when not assigned it uses default value given
const bodmas = (num1, num2, num3 = 0.05) => (num1 * num2) - num3
console.log(bodmas(5,5))

// Access a return value from a function and use it in another function
const gradeAssignment = (mark) => {
    if(mark == 100){
        return "A"
    }
    else if (mark == 70){
        return "C"
    }
    else if (mark == 50){
        return "E"
    }
    else {
        return "F"
    }
}

// const remarks = () => {
//         const grade = gradeAssignment(100)
//         if(grade == "A"){
//             console.log("Excellent Work")
//         }
//         else if(grade == "C"){
//             console.log("Good")
//         }
//         else if(grade == "E"){
//             console.log("Fair")
//         }
//         else {
//             console.log("Failed")
//         }
//     }
 
// remarks()

// Refactor remarks function
const remarks = (score = 50) => {
    const grade = gradeAssignment(score)
    if(grade == "A"){
        console.log("Excellent Work")
    }
    else if(grade == "C"){
        console.log("Good")
    }
    else if(grade == "E"){
        console.log("Fair")
    }
    else {
        console.log("Failed")
    }
}

remarks()
remarks(70)
remarks(100)
remarks(20)











//   // Traditional Anonymous Function
// function (a){
//     return a + 100;
//   }
  
//   // Arrow Function Break Down
  
//   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   }
  
//   // 2. Remove the body braces and word "return" -- the return is implied.
//   (a) => a + 100;
  
//   // 3. Remove the argument parentheses
//   a => a + 100;