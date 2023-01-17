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

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
const denom = [
  { name: "HUNDREDS", val: 100.0 },
  { name: "TWENTYS", val: 20.0 },
  { name: "TENS", val: 10.0 },
  { name: "FIVES", val: 5.0 },
  { name: "ONES", val: 1.0 },
  { name: "QUARTERS", val: 0.25 },
  { name: "DIMES", val: 0.1 },
  { name: "NICKELS", val: 0.05 },
  { name: "PENNYS", val: 0.01 },
];

export const checkCashRegister = (price, cash, cid) => {
  let output = { status: null, change: [] };
  let change = cash - price;
  // Round change to the nearest hundreth (deals with precision errors)
  change = Math.round(change * 100) / 100;

  // Transform cid array into drawer object
  let register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle no sale
  if (change < 0) {
    output.status = "NO_SALE";
    output.change = [];
    return output;
  }

  // Handle exact change
  if (change === 0 && register.total !== change) {
    output.status = "CLOSED";
    output.change = [];
    return output;
  }

  // Handle exact change (nothing left in register)
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  let change_arr = denom.reduce((acc, curr) => {
    let value = 0;
    // While there is still money of this type in the drawer and the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth (deals with precision errors)
      // change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change
  if (change_arr.length < 1 || change > 0) {
    console.log("this");
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change
  output.status = "OPEN";
  output.change = change_arr;
  return output;
};
