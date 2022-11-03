// === Concept
// 1) Get the middle element
// 2) Divide the array for 2 subarrays : one with numbers less than middle number, one with numbers greater than middle number
// 3) Do the first 2 items for each subarray

// Counter = 5

let counter = 0;

export default function fnInsertionSort(array = [5, 4, 3, 2, 1]) {
  counter += 1;
  const middleIndex = Math.floor(array.length / 2);
  const middle = array[middleIndex];
  const less = [];
  const greater = [];

  console.log('===');
  console.log(`counter = ${counter}`);

  if (array.length < 2) {
    return array;
  }

  for (let k = 0; k < array.length; k += 1) {
    if (k === middleIndex) {
      continue;
    } else if (array[k] < middle) {
      less.push(array[k]);
    } else {
      greater.push(array[k]);
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

fnInsertionSort();
