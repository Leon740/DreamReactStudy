// === Concept
// 1) get the (pivot) = last element of array (index = array.length - 1)
// 2) get the (end of sorted array) - (wall)
// 3) compare (pivot) with (each element of array)
// if (pivot) is greater than (element of array), swap (element) with (element) after the (wall) - put (element) before the (wall)
// if (pivot) is less than (each element of array), swap (pivot) with the (first element) after the (wall)

// === Work
// [| 6, 5, 1, 3, 8, 4, 7, 9, 2], pivot = 2, wallIndex = 0
// 2 > 1, swap 6 with 1, wallIndex++
// [1, | 5, 6, 3, 8, 4, 7, 9, 2], pivot = 2, wallIndex = 1
// pivot < each element of array, swap pivot (2) with arr[wallIndex] (5)
// [1, 2, | 6, 3, 8, 4, 7, 9, 5], pivot = 5, wallIndex = 1
// 5 > 3, swap 6 with 3, wallIndex++
// [1, 2, 3, | 6, 8, 4, 7, 9, 5], pivot = 5, wallIndex = 2
// 5 > 4, swap 6 with 4, wallIndex++
// [1, 2, 3, 4, | 8, 6, 7, 9, 5], pivot = 5, wallIndex = 3
// pivot < each element of array, swap pivot (5) with arr[wallIndex] (8)
// [1, 2, 3, 4, 5, | 6, 7, 9, 8], pivot = 8, wallIndex = 4
// 8 > 6, wallIndex++
// [1, 2, 3, 4, 5, 6, | 7, 9, 8], pivot = 8, wallIndex = 5
// 8 > 7, wallIndex++
// [1, 2, 3, 4, 5, 6, 7, | 9, 8], pivot = 8, wallIndex = 6
// pivot < each element of array, swap pivot (8) with arr[wallIndex] (9)
// [1, 2, 3, 4, 5, 6, 7, 8, 9 | ]

// === O(n * log(n))

export default function fnQuickSort(arr = [6, 5, 1, 3, 8, 4, 7, 9, 2]) {
  let counter = 0;

  const array = arr;

  // wallIndex
  let wallIndex = 0;

  for (let k = 0; k < array.length; k += 1) {
    // pivotIndex
    const pivotIndex = array.length - 1;
    // pivot
    const pivot = array[pivotIndex];

    console.log('\n');
    console.log(`pivot = ${pivot}`);
    console.log(`wallIndex = ${wallIndex}`);

    for (let j = wallIndex; j < array.length; j += 1) {
      console.log('\n');
      console.log(`pivot = ${pivot}`);
      console.log(`array[j] = ${array[j]}`);
      console.log(`wallIndex = ${wallIndex}`);
      console.log(`array[wallIndex] = ${array[wallIndex]}`);

      // if (pivot) is greater than (element of array)
      if (pivot > array[j]) {
        // swap (element) with (element) after the (wall) - put (element) before the (wall)
        console.log('>');

        const buffer = array[wallIndex];
        array[wallIndex] = array[j];
        array[j] = buffer;

        // move (wall); update (sorted array end);
        wallIndex += 1;
        console.log(array);
      }

      counter += 1;
    }

    // if (pivot) is less than (each element of array)
    // swap (pivot) with the (first element) after the (wall)
    const buffer = array[wallIndex];
    array[wallIndex] = array[pivotIndex];
    array[pivotIndex] = buffer;

    console.log('\n');
    console.log(array);
  }

  console.log('\n');
  console.log(`counter = ${counter}`);

  return array;
}

const resQuickSort = fnQuickSort();
console.log('\n');
console.log(resQuickSort);
