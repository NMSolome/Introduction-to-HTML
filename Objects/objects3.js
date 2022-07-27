// merging objects
const computerDetails = {
    name: 'Mac',
    model: 2020,
    os: 'catalina',
  };

  const computerPeripherals = {
    hasMouse: true,
    hasKeyboard: true,
  };

  const mergedObjects = Object.assign(
    computerDetails, computerPeripherals
  )
//   console.log(mergedObjects)

  const mergedObjects2 = {...computerDetails, ...computerPeripherals}
  console.log(mergedObjects)