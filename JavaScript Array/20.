var input = prompt("Enter the array : ");
var arr = input.split(' ');

function duplicate(arr){
    var ans = [];
    var temp = [];
    for(var i = 0 ; i < arr.length ; i++){
        if( temp[arr[i]] ){
            temp[arr[i]]++;
            ans.push(arr[i]);
        }
        else
        temp[arr[i]] = 1;
    }
    return ans;
}

console.log(duplicate(arr));
