// IF statement
// if(condition){
//     statement to execute if condition is true
// }



var isItRaining = false
if (isItRaining) {
    console.log("Carry an umbrella")
}


// var car = 1
// var cats = "1"

// var cat = animal 
// var position == 1 //loose comparison operator
// var cat === var cats  ///strict comparison operator

var ageCategory = "Adult"
if (ageCategory == "child") {
    console.log("Sit in section one")
}
else {
    console.log("Sit in adult section")
}


// comparison operators
// < 
// >
// ==
// != (not equal to) !true means not true

var size = 5
if (size > 4) {
    console.log("This size is small")
}
else {
    console.log("This size is OK")
}
//The question you should ask; Is 3 < 4, true, execute that body, if false run the else body
console.log("====================================================================")

// var shirtSize = 20
// use else if when there are many questions
function shirt(shirtsize) {
    if (size < 5) {
        console.log("The shirt size is small")
    }
    else if (shirtsize <= 10) {
        console.log("The shirt size is medium")
    }
    else if (shirtsize <= 15) {
        console.log("The shirt size is Large")
    }
    else if (shirtsize <= 20) {
        console.log("The shirt size is X Large")
    }
    else {
        console.log("The shirt size is XX Large")
    }
}

shirt(30)