// sequence of characters that form a search pattern
//pattern/ modifiers

// let text = "Institute Refactory Uganda";
// let n = text.search("Refactory");
// console.log(n)
// Returns 10

let text = "Institute refactory Uganda";
let n = text.search("Refactory");
console.log(n)
// returns -1 - school doesnt exist
            // PATTERN         (i) MODIFIER case insensitive
let x = text.search(/Refactory/i) 
console.log(x)

// REPLACE METHOD IN REGULAR EXPRESSIONS

let site = "Welcome student";
let result = site.replace(/student/i, "Admin");
console.log(result);
//g : global match
// m : multi - line matching/ searching
// i : modifier case insensitive

// [abc]
let motor = "This is a big car";
let results = motor.search(/[abc]/g);
console.log(results)

// [0-9]
// [a-z]
// [A-Z]

// Meta characters
const pattern = /e/;
pattern.text("Code is awesome"); // True
// does this pattern exist in what we are testing

/x/.test("Code is awesome") // false
// similar to above