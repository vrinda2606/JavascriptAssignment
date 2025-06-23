var input = prompt("Enter the array: ");
var arr = input.split(' ');
var target  = prompt("Enter the element : "); 

function finding(arr , target){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === target)
        return true;
    }
    return false;
}

console.log(finding(arr,target));
