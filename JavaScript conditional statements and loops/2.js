var a = parseInt(prompt("Enter first no : "));
var b = parseInt(prompt("Enter second no : "));
var c = parseInt(prompt("Enter third no : "));

function func(a , b , c){
    if( (a*b*c) >= 0)
    return '+';
    else
    return '-';
}
console.log("The sign is " + func(a,b,c));
