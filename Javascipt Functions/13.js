function getFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log("\n Compute the factors of a positive integer:");
console.log(getFactors(28));
console.log(getFactors(12));
