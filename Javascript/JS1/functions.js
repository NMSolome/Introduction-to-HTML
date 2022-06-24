function addition() {
    var add = 5 + 7
    console.log(add)
    //function declaration/ definition
}
//invoke or call function will execute the addition
addition()


function multiply(num1, num2) {
    console.log(num1 * num2)
}

multiply(4, 5)
multiply(7, 9)
multiply(6, 0)


//Return keyword and scope (where a variable can be visible/ accessed)

var num7 = 8
function subtraction() {
    var num3 = 5
    var num4 = 3
    var num5 = num3 - num4
    // console.log("===========================================================")
    // console.log(num5)
    console.log(num7)
    return num5
}
console.log(subtraction())

// console.log("===========================================================")
// console.log(num5)
console.log(num7)


//Celcius to Fahrenheit
//F=(C x 9/5)+32
function CtoF(Celcius){
    var Fahrenheit = ((Celcius*9)/5)+32
    return Fahrenheit


}
console.log("The temperature in Fahrenheit is "+CtoF(20))
console.log("=========================================================")
// Fahrenheit to Celcius
//C=(F x 5/9)-32
function FtoC(Fahrenheit){
    var Celcius = ((Fahrenheit-32)*(5/9))
    return Celcius
}
console.log ("The temperature in Celcius is "+FtoC(100))
console.log("=========================================================")






// the functiontake in an input and return a value to the user. They help us to write reusable code. One function can be used over and over again to perform that specific action
// General structure or syntax
// function cant use key words, doesnt start with a number,
//passin paramenters into functions