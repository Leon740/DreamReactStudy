// === Concept
// RESULT > 0, sort A after B
// a = 5, b = 4, res = 1 > 0, [4, 5]
// RESULT < 0, sort A before B
// RESULT === 0, keep original order of A and B

const array1 = [5, 4, 3, 2, 1];
array1.sort((a, b) => {
  console.log(`a = ${a}, b = ${b}`);
  return a - b;
});
console.log(array1);

const array2 = [1, 2, 3, 4, 5];
array2.sort((a, b) => b - a);
console.log(array2);

const array3 = [3, 1, 4, 1, 5];
array3.sort((a, b) => a - b);
console.log(array3);

const computers = [
  {
    name: 'phone',
    price: 500
  },
  {
    name: 'laptop',
    price: 1000
  },
  {
    name: 'desktop',
    price: 1500
  }
];

const sortComputersByPrice = [...computers].sort((a, b) => a.price - b.price);
console.log(sortComputersByPrice);

// Alphabet sort
// 1st approach : localeCompare
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
const sortComputersByName = [...computers].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortComputersByName);

// 2nd approach : have an array (2nd array) with strings, sort this array (2nd array), map through this array (2nd array) and take each item from (1st array)
const computersNames = computers.map((computerItem) => computerItem.name);
console.log(computersNames);
console.log(computersNames.sort());
console.log(
  computersNames
    .sort()
    .map((computerItemName) =>
      computers.find((computerItem) => computerItem.name === computerItemName)
    )
);

const names = ['Grigoriy', 'Leonid', 'Danil'];
names.sort((a, b) => a.length - b.length);
console.log(names);
