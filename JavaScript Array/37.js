var n  = parseInt(prompt("Enter the n value : "));
var k  = prompt("Enter the k value : ");


function fillArray(n , k){
    let arr = [];
    for(let i = 0 ; i < n ; i++)
    arr.push(k);
    
    return arr;
}

console.log(fillArray(n , k));
