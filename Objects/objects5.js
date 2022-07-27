const user = {
    name: 'isaac',
    age: 24,
    title: 'developer',
    isMarried: true,
  };
user.address= "Kamwokya"  

console.log(user)
// freezing an object
Object.freeze(user)
user.address= "Jinja" 
user.nationality = "Ugandan"
console.log("frozen", user)