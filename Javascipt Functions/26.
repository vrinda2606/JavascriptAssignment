function longestSubstringWithoutRepeating(str) {
    let longest = '';
    let current = '';
    for (let char of str) {
        const index = current.indexOf(char);
        if (index !== -1) {
            current = current.slice(index + 1);
        }
        current += char;
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}
console.log("\n Find longest substring without repeating characters:");
console.log(longestSubstringWithoutRepeating('abcabcbb'));
console.log(longestSubstringWithoutRepeating('bbbbb'));
