// === Concept
// 1) Get the middle element
// 2) Divide array for 2 subarrays
// 3) Do items 1, 2 until array.length will be 1
// 4) Compare two arrays

// === Work
// [108, 15, 50, 4, 8, 42, 23, 16]
// [108, 15, 50, 4], [8, 42, 23, 16]
// [108, 15], [50, 4], [8, 42], [23, 16]
// 108, 15, 50, 4, 8, 42, 23, 16
// [15, 108], [4, 50], [8, 42], [16, 23]
// [4, 15, 50, 108], [8, 16, 23, 42]
// [4, 8, 15, 16, 23, 42, 50, 108]

// === O(n)

function fnMerge(arrayLeft, arrayRight) {
  console.log(`arrayLeft = ${arrayLeft}`);
  console.log(`arrayRight = ${arrayRight}`);

  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < arrayLeft.length && indexRight < arrayRight.length) {
    if (arrayLeft[indexLeft] < arrayRight[indexRight]) {
      result.push(arrayLeft[indexLeft]);
      indexLeft += 1;
    } else {
      result.push(arrayRight[indexRight]);
      indexRight += 1;
    }
  }

  while (indexLeft < arrayLeft.length) {
    result.push(arrayLeft[indexLeft]);
    indexLeft += 1;
  }

  while (indexRight < arrayRight.length) {
    result.push(arrayRight[indexRight]);
    indexRight += 1;
  }

  console.log(`result = ${result}`);

  return result;
}

function fnMergeSort(arr = [108, 15, 50, 4, 8, 42, 23, 16]) {
  const array = arr;

  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex, array.length);

  if (array.length < 2) {
    return array;
  }

  return fnMerge(fnMergeSort(leftHalf), fnMergeSort(rightHalf));
}

const resMergeSort = fnMergeSort();
console.log(resMergeSort);
