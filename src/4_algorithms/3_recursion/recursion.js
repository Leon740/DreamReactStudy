// === Concept
// Recursion is a function which calls itself
// Function must have a condition to stop the calls

function fnGetFactorial(n) {
  if (n === 1) {
    return n;
  }

  return n * fnGetFactorial(n - 1);
}

console.log(fnGetFactorial(4));
