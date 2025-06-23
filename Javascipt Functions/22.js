function countOccurrences(str, letter) {
    let count = 0;
    for (let char of str) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}
console.log("\n Count occurrences of a letter in a string:");
console.log(countOccurrences('w3resource.com', 'o'));
