// === Concept
// Go through entire array and search for an element

// === Counter = 3

// === O(n)

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

console.log('\n\n\n includes');
console.log(['test', 'not test', 'test'].includes('test'));

console.log('\n\n\n forEach');
array.forEach((item) => {
  const exec = item > 4;
  console.log(`item = ${item}`);
  console.log(`item > 4 = ${exec}`);
  return exec;
});

console.log('\n\n\n map');
array.map((item) => {
  const exec = item > 4;
  console.log(`item = ${item}`);
  console.log(`item > 4 = ${exec}`);
  return exec;
});

console.log('\n\n\n filter');
array.filter((item) => {
  const exec = item > 4;
  console.log(`item = ${item}`);
  console.log(`item > 4 = ${exec}`);
  return exec;
});

console.log('\n\n\n find');
array.find((item) => {
  const exec = item > 4;
  console.log(`item = ${item}`);
  console.log(`item > 4 = ${exec}`);
  return exec;
});
