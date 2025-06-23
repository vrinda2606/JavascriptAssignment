function abbrev_name(str) { 
    let nameParts = str.split(' '); 

    return nameParts[0] + ' ' + nameParts[1].charAt(0) + '.'; 
} 
console.log(abbrev_name("Vrinda Sharma"));  
