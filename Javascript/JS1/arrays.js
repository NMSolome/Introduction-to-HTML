//Array of strings
let students = ["Solome", "Liz", "Annah", "Arsema", "Asiimwe"]
//array of numbers
let height = [160, 130, 140, 200, 178]

         //    0       1       2        3    4
let data = ["Kapere", 120, "Buduuda", true, null]
console.log(data[0])
console.log(data[2])

//nested arrays- Arrays inside an array
//                         0                            1                         2
//                                            0       1        2
var children = [["John", "Music", 10000], ["Jane", "Rugby", 20000], ["Peter", "Chess", 15000]]
console.log(children[1])
console.log(children[1][1])

// modeule not found in the terminal - Change directory

// add element to an array
var colors = ["Red", "Blue", "Green", "Yellow"]
console.log(colors)
colors.push("Pink")
console.log(colors)

//remove last element of an array
//colors.pop()
//console.log(colors)

//Remove the 1st element of an array
//colors.shift()
//console.log(colors)

//add an element at the begining of an array
colors.unshift("Purple")
console.log(colors)