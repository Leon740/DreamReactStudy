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

// === Concept

// === Problem
// We call fn(0) 2 times, fn(1) 2 times, fn(2) 2 times.

// === Solution
// Memoization = is an approach, idea of which is to remember the function result with certain arguments,
// and don't execute this function with the these exact arguments,
// instead return the collected result

function fnGetFibonacci(n, arrMemo = []) {
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

  // problem
  // const result = fnGetFibonacci(n - 1) + fnGetFibonacci(n - 2);
  // console.log(`res = ${result}`);

  // return result;

  // solution
  if (!arrMemo[n]) {
    // eslint-disable-next-line no-param-reassign
    arrMemo[n] = fnGetFibonacci(n - 1, arrMemo) + fnGetFibonacci(n - 2, arrMemo);
  }

  return arrMemo[n];
}

fnGetFibonacci(4);
