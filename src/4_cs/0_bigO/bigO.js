/* eslint-disable no-multiple-empty-lines */

// === 1) O(1)

// let counter = 0;

// function fnGetLastArrayElement(array = [1, 2, 3, 4, 5]) {
//   const lastElement = array[array.length - 1];
//   console.log(lastElement);

//   counter++;

//   return lastElement;
// }
// fnGetLastArrayElement();

// console.log(`counter = ${counter}`);

// No matter what the input size is, the time needed to execute the code will not change (grow)

// === 2) O(n) - linear dependency

// let counter = 0;

// function fnGetSumOfArrayElements(array = [1, 2, 3, 4, 5]) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     counter++;
//   }

//   console.log(sum);

//   return sum;
// }
// fnGetSumOfArrayElements();

// console.log(`counter = ${counter}`);

// n = input size, in this case n is a length of an array
// if we have 3 elements, the code will be executed for 3 times
// if we have 100 elements, the code will be executed for 100 times

// === 3) O(n ^ 2)

// let counter = 0;

// const letters = ['A', 'B', 'C', 'E', 'F'];
// // const letters = ['A', 'B', 'C'];
// const numbers = [1, 2, 3, 4, 5];

// for (let k = 0; k < letters.length; k++) {
//   for (let j = 0; j < numbers.length; j++) {
//     console.log(letters[k]);
//     console.log(numbers[j]);
//     counter++;
//   }
//   console.log('\n');
// }

// console.log(counter);

// n = length of 1st array * length of 2nd array
// if we have 3 and 5 elements, the code will be executed 15 times
// if we have 5 and 5 elements, the code will be executed 25 times

// 2nd example

// let counter = 0;

// function fnGetMultiplicationTable(number) {
//   for (let k = 1; k <= number; k++) {
//     for (let j = 1; j <= number; j++) {
//       console.log(`${k} * ${j} = ${k * j}`);

//       counter++;
//     }
//   }
// }

// fnGetMultiplicationTable(3);

// console.log(`counter = ${counter}`);
