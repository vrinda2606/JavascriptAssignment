function humanize_format(num = 0) { 
    const suffixes = ['th', 'st', 'nd', 'rd']; 
    const mod = num % 10; 
    const suffix = (mod > 3 || (num % 100 >= 11 && num % 100 <= 13)) ? 'th' : suffixes[mod]; 
    return num + suffix; 
} 
 
console.log(humanize_format());  
console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402));
