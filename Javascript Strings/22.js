function subStrAfterChars(str, char1, char2) { 
   let index1 = str.indexOf(char1); 
  if (index1 !== -1) { 
    str = str.slice(index1 + 1); 
  } 
   
  let index2 = str.indexOf(char2); 
   
   if (index2 !== -1) { 
    return str.slice(index2 + 1); 
  } 
   
    return str; 
} 
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); 
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); 
