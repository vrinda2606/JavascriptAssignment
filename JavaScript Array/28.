var input = prompt("Enter the Strings : ");
var arr = input.split(' ');

function longest(arr){
    let temp = 0 ;
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i].length > arr[temp].length)
        temp = i;
    }
    return arr[temp];
}

console.log(longest(arr));
