/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
// === Concept
// Recursion is a function which calls itself
// Function must have a condition to stop the calls



// 1 ex
function fnCountdownIterable(n) {
  for (let i = n; i > 0; i -= 1) {
    console.log(i);
  }
}
// fnCountdownIterable(5);

function fnCountdownRecursive(n) {
  if (n === 0) {
    return;
  }

  console.log(n);

  fnCountdownRecursive(n - 1);
}
// fnCountdownRecursive(5);



// 2 ex
function fnGetSumIterable(n, sum = 0) {
  for (let i = n; i > 0; i -= 1) {
    sum += i;
    console.log(`i = ${i}`);
    console.log(`sum = ${sum}`);
  }

  console.log(sum);

  return sum;
}
// fnGetSumIterable(3);

function fnGetSumRecursive(n, sum = 0) {
  if (n <= 0) {
    return sum;
  }

  sum += n;
  console.log(`n = ${n}`);
  console.log(`sum = ${sum}`);

  return fnGetSumRecursive(n - 1, sum);
}
// fnGetSumRecursive(3, 0);
  // fnGetSumRecursive(2, 3);
    // fnGetSumRecursive(1, 5);
    // fnGetSumRecursive(0, 6);



// 3 ex
function fnGetFactorial(n) {
  // Math
  // 4! = 1 * 2 * 3 * 4

  // Functions stack

  // fn(4) = 4 * fn(3)
  // fn(3) = 3 * fn(2)
  // fn(2) = 2 * fn(1)
  // fn(1) = 1 * fn(0) = 1

  // fn(4) = 24
  // fn(3) = 6
  // fn(2) = 2
  // fn(1) = 1
  // 1
  // 2
  // 6
  // 24

  console.log(`n = ${n}`);

  if (n <= 0) {
    console.log('0');
    return 0;
  }

  if (n === 1) {
    console.log('1');
    return n;
  }

  const result = n * fnGetFactorial(n - 1);
  console.log(result);

  return result;
}
// fnGetFactorial(4);

function fnGetFibonacci(n) {
  // Math
  // num = (num - 1) + (nun - 2)
  // number is summary of two prev numbers

  // Functions stack

  // fn(0) = 0
  // fn(1) = 1
  // fn(2) = fn(1) + fn(-1) = 1 + 0 = 1
  // fn(3) = fn(2) + fn(1) = 1 + 1 = 2
  // fn(4) = fn(3) + fn(2) = 2 + 1 = 3

  // fn(4)

  // fn(3)
  // fn(2)
  // fn(1)
  // fn(0)

  // fn(2)
  // fn(1)
  // fn(0)

  // 3

  // 2
  // 1
  // 0

  // 1
  // 1
  // 0

  console.log('\n');
  console.log(`n = ${n}`);

  if (n <= 0) {
    console.log('0');
    return 0;
  }

  if (n === 1) {
    console.log('1');
    return n;
  }

  const result = fnGetFibonacci(n - 1) + fnGetFibonacci(n - 2);
  console.log(`res = ${result}`);

  return result;
}
// fnGetFibonacci(4);



// Ex 4.
const objFolders = {
  name: 'Parent',
  subfolders: [
    {
      name: 'Child 1',
      subfolders: [
        {
          name: 'Grand child 1',
          subfolders: [],
        },
        {
          name: 'Grand child 2',
          subfolders: [
            {
              name: 'Extra grand child',
              subfolders: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Child 2',
      subfolders: [],
    },
  ],
};

function fnGetFoldersQtyRecursive(folder, qty = 1) {
  console.log('\n');
  console.log(folder);
  console.log(qty);

  if (folder.subfolders.length) {
    folder.subfolders.forEach((folderItem) => {
      qty = fnGetFoldersQtyRecursive(folderItem, qty + 1);
    });
  }

  return qty;
}
fnGetFoldersQtyRecursive(objFolders);
// fnGetFoldersQtyRecursive('Parent')
  // fnGetFoldersQtyRecursive('Child 1')
    // fnGetFoldersQtyRecursive('Grand child 1')
    // fnGetFoldersQtyRecursive('Grand child 2')
      // fnGetFoldersQtyRecursive('Extra grand child 2')
  // fnGetFoldersQtyRecursive('Child 2')
