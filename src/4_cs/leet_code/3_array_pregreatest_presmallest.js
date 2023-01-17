function fnGetPreGreatestPreSmallest(arrayArg = [5, 4, 3, 2, 1]) {
  const array = [...arrayArg];

  for (let k = 0; k < array.length; k++) {
    console.log('\n');
    console.log(`array[k] = ${array[k]}`);

    let indexMin = k;

    for (let j = k + 1; j < array.length; j++) {
      console.log(`array[j] = ${array[j]}`);

      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }

    const buffer = array[k];
    array[k] = array[indexMin];
    array[indexMin] = buffer;

    console.log(array);
  }

  return [array[1], array[array.length - 1]];
}
console.log(fnGetPreGreatestPreSmallest());
