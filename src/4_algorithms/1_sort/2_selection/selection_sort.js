// === Concept
// 1) Get the minimum number
// 2) Swap this number with the first number in the array

// === Work
// 5, [4, 3, 2, (1)] => [(1), 4, 3, 2, (5)]
// 1, (4), [3, (2), 5] => [1, (2), 3, (4), 5]
// 1, 2, (3), [(4), 5] => [1, 2, (3), (4), 5]
// 1, 2, 3, (4), [(5)] => [1, 2, 3, (4), (5)]
// [1, 2, 3, 4, 5]

// === Counter = 10

// === O(n^2)

export default function fnSelectionSort(arr = [5, 4, 3, 2, 1]) {
  const array = arr;

  let counter = 0;

  for (let k = 0; k < array.length; k += 1) {
    let min = array[k];
    let index = k;

    for (let j = k + 1; j < array.length; j += 1) {
      counter += 1;

      console.log('===');
      console.log(`k = ${k}`);
      console.log(`j = ${j}`);

      if (min > array[j]) {
        min = array[j];
        index = j;
      }

      console.log(`min = ${min}`);
      console.log(`index = ${index}`);
    }

    const buffer = array[k];
    array[k] = min;
    array[index] = buffer;

    console.log(array);
  }

  console.log(`counter = ${counter}`);

  return array;
}

const resSelectionSort = fnSelectionSort();
console.log(resSelectionSort);
