// Example 4
const user = {
    name: 'isaac',
    age: 24,
    title: 'developer',
    isMarried: true,
  };
  
  user.address = 'Kyanja';
  console.log('Before freeze', user);
  
  Object.freeze(user);
  
  user.address = 'Kololo';
  user.isAdmin = false;
  console.log('After freeze', user);
  
  function unfreeze(obj) {
    if (Object.isFrozen(obj)) {
      return Object.assign({}, obj);
    }
    return obj;
  }
  
  const unfrozenUser = unfreeze(user);
  console.log(Object.isFrozen(unfrozenUser));
  
  unfrozenUser.isDeveloper = true;
  
  console.log('Not unfrozen but a copy/ clone made', unfrozenUser);
  