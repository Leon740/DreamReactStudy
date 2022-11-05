// === Concept
// 1) Get the max number
// 2) Make it bubble to the end

// === Note
// Use (-k) to skip checking for the checked(moved to the end numbers).

// === Work
// [(5), 4, 3, 2, 1]; [4, (5), 3, 2, 1]; [4, 3, (5), 2, 1]; [4, 3, 2, (5), 1]; [4, 3, 2, 1, (5)]
// [(4), 3, 2, 1, 5]; [3, (4), 2, 1, 5]; [3, 2, (4), 1, 5]; [3, 2, 1, (4), 5];
// [(3), 2, 1, 4, 5]; [2, (3), 1, 4, 5]; [2, 1, (3), 4, 5];
// [(2), 1, 3, 4, 5]; [1, (2), 3, 4, 5]
// [1, 2, 3, 4, 5]

// === Counter = 15

// === O(n^2)

export default function fnBubbleSort(arr = [5, 4, 3, 2, 1]) {
  const array = arr;

  let counter = 0;

  for (let k = 0; k < array.length; k += 1) {
    for (let j = 0; j < array.length - k; j += 1) {
      if (array[j] > array[j + 1]) {
        console.log('===');
        console.log(`k = ${k}`);
        console.log(`j = ${j}`);
        console.log(`array[j] = ${array[j]}`);
        console.log(`array[j + 1] = ${array[j + 1]}`);
        const buffer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = buffer;
      }

      counter += 1;

      console.log(array);
    }
  }

  console.log(`counter = ${counter}`);

  return array;
}

const resBubbleSort = fnBubbleSort();
console.log(resBubbleSort);
