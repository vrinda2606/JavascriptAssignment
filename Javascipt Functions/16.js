function uniqueCharacters(str) {
    return Array.from(new Set(str)).join('');
}
console.log("\n Extract unique characters from a string:");
console.log(uniqueCharacters('thequickbrownfoxjumpsoverthelazydog'));
