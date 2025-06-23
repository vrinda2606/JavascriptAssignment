function uncamelize(str, separator = ' ') { 
    return str.replace(/([a-z0-9])([A-Z])/g, '$1' + separator + '$2').toLowerCase(); 
} 
console.log(uncamelize('helloWorld'));           console.log(uncamelize('helloWorld', '-'));      
console.log(uncamelize('helloWorld', '_'));  
