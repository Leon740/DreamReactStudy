// Palindrome
// Is a word which is the same in both reversed and normal versions.

// 1st approach
function fnCheckPalindrome1(word = '') {
  // 1) (split) string to array
  // 2) (reverse) array
  // 3) convert reversed string back to array using (join)

  console.log(word.split(''));
  console.log(word.split('').reverse());
  console.log(word.split('').reverse().join(''));

  return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
}
console.log(fnCheckPalindrome1('sosipisos'));
console.log(fnCheckPalindrome1('palindrome'));

// 2nd approach
// much faster
console.log('\n\n\n');
function fnCheckPalindrome2(word = '') {
  // 1) get the middle index of the word
  // 2) compare letter on left side and on right side with middle index [left, middle, right]

  const middleIndex = Math.floor(word.length / 2);
  console.log(middleIndex);

  for (let i = 1; i < middleIndex; i++) {
    console.log('\n');
    console.log(word[middleIndex - 1]);
    console.log(word[middleIndex + 1]);
    if (word[middleIndex - 1].toLowerCase() !== word[middleIndex + 1].toLowerCase()) {
      return false;
    }
  }

  return true;
}
// fnCheckPalindrome2('012345678');
// fnCheckPalindrome2('sosipisos');
console.log(fnCheckPalindrome2('sosipisos'));
console.log(fnCheckPalindrome2('palindrome'));
