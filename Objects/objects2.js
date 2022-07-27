let user = {}
console.log('Before assignment', user);


user = Object.assign({},{  //checks the objects, if the previous object had propoerties in it and assign it an object that has properties, it replaces. The user is assigned new object
    Name: "Kevin",
    Age: 43,
    Title: "Auditor",
    isMarried: true
})
console.log('After assignment', user);

user.isDeveloper = true;
console.log('Single assignment with dot notation', user);

user['isAdmin'] = true;
console.log('Single assignment with bracket notation', user);
