const user = {
    name: 'isaac',
    age: 24,
    title: 'developer',
    isMarried: true,
  };
  
  console.log('has name -> ', user.hasOwnProperty('name'));
  console.log('is admin -> ', user.hasOwnProperty('isAdmin'));

if (user.hasOwnProperty("isMarried") && user.hasOwnProperty("isMarried") === true) {
    console.log("user is married")
} else { 
    console.log("user is not married")
}