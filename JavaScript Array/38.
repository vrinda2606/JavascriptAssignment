var input = prompt("Enter the array: ");
var arr = input.split(' ');
var i  = parseInt(prompt("Enter the i value : "));
var j  = parseInt(prompt("Enter the j value : "));


function move(arr, i , j ){
    
    if(i < 0)
    i = arr.length + i;
    if(j < 0)
    j = arr.length + j;
    if(i > j)
    [i,j] = [j,i] ;
    let temp = arr[i];
    for(let k = i ; k < j ; k++)
       arr[k] = arr[k+1];
    arr[j] = temp ;
    
    return arr;
}

console.log(move(arr, i , j ));
