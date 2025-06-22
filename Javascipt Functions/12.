function isPerfect(num) {
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i * i !== num) {
                sum += num / i;
            }
        }
    }
    return sum === num;
}

console.log("\n Check if a number is perfect:");
console.log(isPerfect(6));
console.log(isPerfect(28)); 
console.log(isPerfect(12));    
