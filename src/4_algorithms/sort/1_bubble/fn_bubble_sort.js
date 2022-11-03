// === Concept
// 1) Get the max number
// 2) Make it bubble to the end
// Use (-k) to skip checking for the checked(moved to the end numbers).

// === Example:
// max from [5, 4, 3, 2, 1] is 5, move 5 to the end, result = [4, 3, 2, 1, 5]
// max from [4, 3, 2, 1] is 4, move 4 to the end, result = [3, 2, 1, 4, 5]
// max from [3, 2, 1] is 3, move 3 to the end, result = [2, 1, 3, 4, 5]
// max from [2, 1] is 2, move 2 to the end, result = [1, 2, 3, 4, 5]
// max from [1] is 1, move 1 to the end, result = [1, 2, 3, 4, 5]

// Counter = 10

export function fnBubbleSortByIncrease(arr = [5, 4, 3, 2, 1]) {
  const array = arr;

  let counter = 0;

  for (let k = 0; k < array.length; k += 1) {
    for (let j = 0; j < array.length - k; j += 1) {
      if (array[j] > array[j + 1]) {
        console.log('===');
        console.log(`arr[${j}] = ${array[j]}`);
        console.log(`arr[${j + 1}] = ${array[j + 1]}`);

        const buffer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = buffer;

        counter += 1;
      }
    }

    console.log(array);
  }

  console.log(`counter = ${counter}`);
}

fnBubbleSortByIncrease();

export function fbBubbleSortByDecrease(arr = [1, 2, 3, 4, 5]) {
  const array = arr;

  let counter = 0;

  for (let k = 0; k < array.length; k += 1) {
    for (let j = 0; j < array.length - k; j += 1) {
      if (array[j] < array[j + 1]) {
        console.log('===');
        console.log(`arr[${j}] = ${array[j]}`);
        console.log(`arr[${j + 1}] = ${array[j + 1]}`);

        const buffer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = buffer;

        counter += 1;
      }
    }

    console.log(array);
  }

  console.log(`counter = ${counter}`);
}

fbBubbleSortByDecrease();
