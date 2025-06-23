function funct(str){
    str = str.split('').sort().join('');
    return str ;
}
var str = prompt("Enter the string : ");
console.log(funct(str));
