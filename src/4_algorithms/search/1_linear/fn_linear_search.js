// === Concept
// Go through entire array and search for an element

export default function fnLinearSearch(array = [1, 2, 3, 4, 5], number = 3) {
  let counter = 0;

  for (let i = 0; i < array.length; i += 1) {
    counter += 1;
    console.log(`counter = ${counter}`);
    console.log('===');

    if (array[i] === number) {
      return i;
    }
  }

  return -1;
}

const array = [10, 9, 8, 7, 3, 4, 5, 6];
const number = 3;

console.log(`index = ${fnLinearSearch(array, number)}`);
console.log(`element = ${array[fnLinearSearch(array, number)]}`);

console.log('=== includes start ===');
console.log(['test', 'not test', 'test'].includes('test'));
console.log('=== includes end ===\n\n\n');

console.log('=== forEach start ===');
array.forEach((item) => {
  const exec = item > 4;
  console.log(`item = ${item}`);
  console.log(`item > 4 = ${exec}`);
  return exec;
});
console.log('=== forEach end ===\n\n\n');

console.log('=== map start ===');
array.map((item) => {
  const exec = item > 4;
  console.log(`item = ${item}`);
  console.log(`item > 4 = ${exec}`);
  return exec;
});
console.log('=== map end ===\n\n\n');

console.log('=== filter start ===');
array.filter((item) => {
  const exec = item > 4;
  console.log(`item = ${item}`);
  console.log(`item > 4 = ${exec}`);
  return exec;
});
console.log('=== filter end ===\n\n\n');

console.log('=== find start ===');
array.find((item) => {
  const exec = item > 4;
  console.log(`item = ${item}`);
  console.log(`item > 4 = ${exec}`);
  return exec;
});
console.log('=== find end ===\n\n\n');
