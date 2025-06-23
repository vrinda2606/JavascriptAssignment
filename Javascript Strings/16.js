function text_truncate(str, length = 33, truncator = '...') { 
    return str.length > length ? str.slice(0, length) + truncator : str; 
} 
 
console.log(text_truncate('We are doing JS string exercises.'));  
console.log(text_truncate('We are doing JS string exercises.', 16)); 
console.log(text_truncate('We are doing JS string exercises.', 16, '!!'));
