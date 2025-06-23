var input1 = prompt("Enter the array 1 : ");
var arr1 = input1.split(' ');
var input2 = prompt("Enter the array 2 : ");
var arr2 = input2.split(' ');

function union(arr1 , arr2){
    var ans = [...new Set([...arr1 , ...arr2])];
    return ans;
}

console.log(union(arr1 , arr2));
