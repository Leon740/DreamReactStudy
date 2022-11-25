// === Concept
// 1) Get the middle element
// 2) Divide the array for 2 subarrays
// 3) Work with the array which contains our target
// 4) Repeat item 1, item 2

// === Note: the searchable array has to be sorted

// === Work
// target = 2;
// [1, 2, 3, 4, 5]; start = 0; end = 4; middle = 2; target (2) < array[middle = 2] (3) ==> end = 1;
// [1, 2]; start = 0; end = 1; middle = 0; target (2) > array[middle = 0] (1) ==> start = 1;
// [2]; start = 1; end = 1; middle = 1; target (2) == array[middle = 0]
// [2]; index = middle = 1;

// target = 4
// [1, 2, 3, 4, 5]; start = 0; end = 4; middle = 2; target (4) > array[middle = 2] (3) ==> start = 3;
// [4, 5]; start = 3; end = 4; middle = 3; target (4) == array[middle = 3] (4)
// [4]; index = middle = 3;

// === Counter = 2

// === O(n)

let counter = 0;

export default function fnBinarySearch(array = [1, 2, 3, 4, 5], target = 2) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    counter += 1;
    const middle = Math.floor((end - start) / 2) + start;
    console.log('===');
    console.log(`start = ${start}`);
    console.log(`middle = ${middle}`);
    console.log(`end = ${end}`);
    console.log(`counter = ${counter}`);

    if (target > array[middle]) {
      start = middle + 1;
    } else if (target < array[middle]) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

const array = [1, 2, 3, 4, 5];
const target = 3;

console.log(`index = ${fnBinarySearch(array, target)}`);
console.log(`element = ${array[fnBinarySearch(array, target)]}`);
