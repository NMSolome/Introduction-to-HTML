// merging objects
const computerDetails = {
    name: 'Mac',
    model: 2020,
    isALaptop: true,
  };

  const computerPeripherals = {
    hasMouse: true,
    isALaptop: 'Yes',   // removes duplicates. The last one is what is taken
  };

  const mergedObjects = Object.assign(
    computerDetails, computerPeripherals
  )
//   console.log(mergedObjects)

  const mergedObjects2 = {...computerDetails, ...computerPeripherals}
  console.log(mergedObjects)