function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('racecar'));

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at n\
  the end of the string. if the letters don't match, return false
  if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
  I need to make an isPalindrome function that returns \n
  either true or false. When the input string is the same \n
  forwards and backwards, I should return true. That means if \n
  the first letter is the same as the last letter, and the second \n
  letter is the same as the second to last letter, and so on n\
  (until the middle of the word), the function should return true.
  For the word "racecar", the first and last letter is "r", \n
  the second and second to last is "a", the third and third to l\n
  ast is "c", and the middle is "e", so I should return true. \n
  For the word "robot", the first letter is "r" and the last \n
  letter is "t", so I should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
