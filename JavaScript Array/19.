var input1 = prompt("Enter the 1st array : ");
var input2 = prompt("Enter the 2nd array : ");
var arr1 = input1.split(' ');
var arr2 = input2.split(' ');

function sum(arr1 , arr2){
    var ans = [];
    var i = 0 , j = 0 , m = arr1.length , n = arr2.length;
    while(i < m && j < n){
        ans.push(parseInt(arr1[i]) + parseInt(arr2[j]));
        i++;
        j++;
    }
    while(i < m){
        ans.push(parseInt(arr1[i]));
        i++;
    }
    while(j < n){
        ans.push(parseInt(arr2[j]));
        j++;
    }
    return ans;
}

console.log(sum(arr1 , arr2));
