// === Concept
// 1) get the (pivot) = last element of array (index = array.length - 1)
// 2) get the (end of sorted array) - (wall)
// 3) compare (pivot) with (each element of array)
// if (pivot) is greater than (element of array), swap (element) with (element) after the (wall) - put (element) before the (wall)
// if (pivot) is less than (each element of array), swap (pivot) with the (first element) after the (wall)

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
