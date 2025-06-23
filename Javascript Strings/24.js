function strip(str) { 
    return str.trim(); 
} 
console.log(strip('w3resource ')); 
console.log(strip(' w3resource'));  
console.log(strip(' w3resource '));  
. 
24.  
function truncate(str, wordLimit) { 
    let words = str.split(' '); 
    return words.slice(0, wordLimit).join(' '); 
} 
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));   
