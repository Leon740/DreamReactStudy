// === Concept
// Go through entire array and search for an element

// === Counter = 3

export default function fnLinearSearch(array = [1, 2, 3, 4, 5], target = 3) {
  let counter = 0;

  for (let i = 0; i < array.length; i += 1) {
    counter += 1;
    console.log(`counter = ${counter}`);
    console.log('===');

    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

const array = [1, 2, 3, 4, 5];
const target = 3;

console.log(`index = ${fnLinearSearch(array, target)}`);
console.log(`element = ${array[fnLinearSearch(array, target)]}`);

// === Linear search examples

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
