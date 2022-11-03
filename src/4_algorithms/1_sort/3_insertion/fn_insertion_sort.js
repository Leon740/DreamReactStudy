// === Concept
// 1) Get the middle element
// 2) Divide the array for 2 subarrays : one with numbers less than middle number, one with numbers greater than middle number
// 3) Do the first 2 items for each subarray

// === Work
// [5, 4, 3, 2, 1] => [5, 4], (3), [2, 1]
// [5, 4] => (4), (5)
// [2, 1] => (1), (2)
// [1, 2, 3, 4, 5]

// === Counter = 7

let counter = 0;

export default function fnInsertionSort(arr = [5, 4, 3, 2, 1]) {
  const array = arr;

  counter += 1;

  const middleIndex = Math.floor(array.length / 2);
  const middle = array[middleIndex];
  const less = [];
  const greater = [];

  if (array.length < 2) {
    return array;
  }

  for (let k = 0; k < array.length; k += 1) {
    if (array[k] < middle) {
      less.push(array[k]);
    } else if (array[k] > middle) {
      greater.push(array[k]);
    } else {
      continue;
    }
  }

  console.log(`array = ${array}`);
  console.log(`less = ${less}`);
  console.log(`middle = ${middle}`);
  console.log(`greater = ${greater}`);

  return [
    ...fnInsertionSort(less),
    middle,
    ...fnInsertionSort(greater),
  ];
}

const resInsertionSort = fnInsertionSort();
console.log(resInsertionSort);

console.log(`counter = ${counter}`);