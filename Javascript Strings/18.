function count(str, subStr, caseSensitive = true) { 
    const regex = new RegExp(subStr, caseSensitive ? 'g' : 'gi'); 
    return (str.match(regex) || []).length; 
} 
console.log(count("The quick brown fox jumps over the lazy dog", 'the',false));  
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));
