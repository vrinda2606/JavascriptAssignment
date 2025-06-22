function countLetters(str) {
    const counts = {};
    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            counts[char] = counts[char] ? counts[char] + 1 : 1;
        }
    }
    return counts;
}

console.log("\n Get the number of occurrences of each letter in a string:");
console.log(countLetters('hello world'));
