// === Concept
// 1) Get the minimum number
// 2) Swap this number with the first number in the array

// === Example:
// min from [5, 4, 3, 2, 1] is 1, swap 1 with 5, result = [1, 4, 3, 2, 5]
// min from [4, 3, 2, 5] is 2, swap 2 with 4, result = [1, 2, 3, 4, 5]

// Counter = 5

export function fnSelectionSortByIncrease(arr = [5, 4, 3, 2, 1]) {
  const array = arr;

  let counter = 0;

  for (let k = 0; k < array.length; k += 1) {
    let min = array[k];
    let index = k;

    for (let j = k; j < array.length; j += 1) {
      console.log('===');
      console.log(`k = ${k}`);
      console.log(`j = ${j}`);
      if (min > array[j]) {
        min = array[j];
        index = j;
      }
    }

    console.log(`min = ${min}`);
    console.log(`index = ${index}`);

    const buffer = array[k];
    array[k] = array[index];
    array[index] = buffer;

    counter += 1;

    console.log(array);
  }

  console.log(`counter = ${counter}`);
}

fnSelectionSortByIncrease();

export function fnSelectionSortByDecrease(arr = [1, 2, 3, 4, 5]) {
  const array = arr;

  let counter = 0;

  for (let k = 0; k < array.length; k += 1) {
    let max = array[k];
    let index = k;

    for (let j = k; j < array.length; j += 1) {
      console.log('===');
      console.log(`k = ${k}`);
      console.log(`j = ${j}`);
      console.log(`array[j] = ${array[j]}`);
      if (max < array[j]) {
        max = array[j];
        index = j;
      }
    }

    console.log(`max = ${max}`);
    console.log(`index = ${index}`);

    const buffer = array[k];
    array[k] = array[index];
    array[index] = buffer;

    counter += 1;

    console.log(array);
  }

  console.log(`counter = ${counter}`);
}

fnSelectionSortByDecrease();
