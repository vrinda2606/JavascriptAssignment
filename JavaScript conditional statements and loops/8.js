function sumOfSquares(num) {
  let sum = 0;
  let digits = num.toString().split("");
  for (let d of digits) {
    sum += Number(d) * Number(d);
  }
  return sum;
}

function isHappy(num) {
  let seen = [];

  while (num !== 1 && !seen.includes(num)) {
    seen.push(num);           
    num = sumOfSquares(num);
  }

  return num === 1;
}

let happyNumbers = [];
let number = 1;

while (happyNumbers.length < 5) {
  if (isHappy(number)) {
    happyNumbers.push(number);
  }
  number++;
}

console.log("First 5 happy numbers:", happyNumbers);
