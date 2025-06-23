function repeat_string(str, count = null) { 
    if (typeof str !== 'string' || typeof count !== 'number' || count < 1) { 
        return "Error in string or count."; 
    } 
    return str.repeat(count); 
} 
console.log(repeat_string('a', 4));  
console.log(repeat_string('a'));
