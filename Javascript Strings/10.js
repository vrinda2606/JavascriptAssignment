function swapcase(str) { 
    return str.split('').map(function(char) { 
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(); 
    }).join(''); 
} 
console.log(swapcase('AaBbc'));  
