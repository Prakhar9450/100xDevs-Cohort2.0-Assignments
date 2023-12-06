function isPalindrome(str) {
  let lowercaseStr = str.toLowerCase();
  // TO remove punctuations
  let finalStr = lowercaseStr.replace(/[^0-9a-z]/g, "");
  console.log(finalStr);
  let reversedStr = finalStr.split("").reverse().join("");
  console.log(reversedStr);
  if (reversedStr === finalStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("liril lir !!!!....il"));
