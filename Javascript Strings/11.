function camelize(str) { 
    return str 
        .replace(/(?:^\w|[A-Z]|\b\w|\s+|[-_])/g, (match, index) =>  
            index === 0 ? match.toLowerCase() : match.toUpperCase()) 
        .replace(/\s+/g, '') 
        .replace(/[-_]+/g, ''); 
} 
console.log(camelize("JavaScript Exercises"));     
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises")); 
