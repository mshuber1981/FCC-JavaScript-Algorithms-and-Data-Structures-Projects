// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
export function palindromeAlgo(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
export function convertToRoman(num) {
  function getNumeral(digit, lowStr, midStr, nextStr) {
    switch (true) {
      case digit <= 3:
        return lowStr.repeat(digit);
      case digit === 4:
        return lowStr + midStr;
      case digit <= 8: // digits 5-8
        return midStr + lowStr.repeat(digit - 5);
      default: // digit 9
        return lowStr + nextStr;
    }
  }

  let str = "";

  // Thousands
  str += "M".repeat(Math.floor(num / 1000));
  num %= 1000;

  // Hundreds
  str += getNumeral(Math.floor(num / 100), "C", "D", "M");
  num %= 100;

  // Tens
  str += getNumeral(Math.floor(num / 10), "X", "L", "C");
  num %= 10;

  // Ones
  str += getNumeral(num, "I", "V", "X");

  return str;
}

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
export function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .map((char) => {
      const pos = alphabet.indexOf(char);
      return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
    })
    .join("");
}

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
export function telephoneCheck(str) {
  // eslint-disable-next-line
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
