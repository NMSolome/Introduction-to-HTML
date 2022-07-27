const user = {
    Name: "Kevin",
    Age: 43,
    Title: "Auditor",
    isMarried: true
}
console.log(user)
// deleting a property from an object
delete user.Title
console.log(user)

// add a propoerty to an existing object (check whether the user is an admin)
user.isAnAdmin = true;
console.log(user)