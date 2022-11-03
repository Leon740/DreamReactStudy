// === Concept
// RESULT > 0, sort A after B
// a = 5, b = 4, res = 1 > 0, [4, 5]
// RESULT < 0, sort A before B
// RESULT === 0, keep original order of a and b

const array1 = [5, 4, 3, 2, 1];

array1.sort((a, b) => a - b);

console.log(array1);

const array2 = [1, 2, 3, 4, 5];

array2.sort((a, b) => b - a);

console.log(array2);

const array3 = [3, 1, 4, 1, 5];

array3.sort((a, b) => a - b);

console.log(array3);

const computers = [
  {
    name: 'desktop',
    price: 1500,
  },
  {
    name: 'laptop',
    price: 1000,
  },
  {
    name: 'phone',
    price: 500,
  },
];

computers.sort((a, b) => a.price - b.price);

console.log(computers);

const names = ['Grigoriy', 'Leonid', 'Danil'];

names.sort((a, b) => a.length - b.length);

console.log(names);
