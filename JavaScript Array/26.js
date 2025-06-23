var input = prompt("Numbers : ");
var arr = input.split(' ');
var target = parseInt(prompt("Target : "));

function func(arr , target){
    for(var i = 0 ; i < arr.length - 1 ; i++){
        for(let j = 1+1 ; j < arr.length ; j++){
            if(parseInt(arr[i]) + parseInt(arr[j]) === target )
            return [i , j] ;
        }
    }
    return -1;
}

console.log(func(arr , target));
