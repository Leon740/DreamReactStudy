/* eslint-disable camelcase */

// Anagram
// Is a condition when 2 words of the same length contains the same qty of characters

// 1st approach
function fnCheckAnagram1(word_1 = '', word_2 = '') {
  // 1) check the (length) of each word - it should be (equal)
  // 2) (lowerCase) each word
  // 3) (split) each word to array
  // 4) (sort) each word
  // 5) convert sorted array to string using (join)

  if (word_1.length !== word_2.length) return false;

  const word_1_lowerCase = word_1.toLowerCase();
  const word_2_lowerCase = word_2.toLowerCase();

  console.log(word_1_lowerCase.split(''));
  console.log(word_1_lowerCase.split('').sort());
  console.log(word_1_lowerCase.split('').sort().join(''));

  console.log(word_2_lowerCase.split('').sort().join(''));

  return word_1_lowerCase.split('').sort().join('') === word_2_lowerCase.split('').sort().join('');
}
console.log(fnCheckAnagram1('friend', 'finder'));
console.log(fnCheckAnagram1('reptile', 'replit'));

// 2nd approach
function fnCheckAnagram2(word_1 = '', word_2 = '') {
  // 1) check the (length) of each word - it should be (equal)
  // 2) (lowerCase) each word
  // 3) create 2 hashmaps and compare each key & value of 1st hash with 2nd
  if (word_1.length !== word_2.length) return false;

  const word_1_lowerCase = word_1.toLowerCase();
  const word_2_lowerCase = word_2.toLowerCase();

  function fnGetHashmap(word = '') {
    if (word.length < 1) return {};

    const hashmap = {};

    for (let i = 0; i < word.length; i++) {
      // console.log(word[i]);
      // console.log(Object.keys(hashmap).includes(word[i]));

      if (Object.keys(hashmap).includes(word[i])) {
        hashmap[word[i]] += 1;
      } else {
        hashmap[word[i]] = 1;
      }
    }

    return hashmap;
  }

  const word_1_hashmap = fnGetHashmap(word_1_lowerCase);
  const word_2_hashmap = fnGetHashmap(word_2_lowerCase);

  // for (let char in word_1_hashmap) {
  //   if (word_1_hashmap[char] !== word_2_hashmap[char]) return false;
  // }

  const word_1_hashmap_keys = Object.keys(word_1_hashmap);

  for (let i = 0; i < word_1_hashmap_keys.length; i++) {
    // 1st hashmap value of the key === 2nd hashmap value of the (key from 1st hashmap)
    if (word_1_hashmap[word_1_hashmap_keys[i]] !== word_2_hashmap[word_1_hashmap_keys[i]]) return false;
  }

  return true;
}
console.log(fnCheckAnagram2('friend', 'finder'));
console.log(fnCheckAnagram2('reptile', 'replit'));
