function longestPalindrome(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const substr = str.slice(i, j);
            if (substr === substr.split('').reverse().join('') && substr.length > longest.length) {
                longest = substr;
            }
        }
    }
    return longest;
}

console.log("\n Find longest palindrome in a string:");
console.log(longestPalindrome('bananas'));
console.log(longestPalindrome('abracadabra'));
