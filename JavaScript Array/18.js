var input = prompt("Enter the array : ");
var n = parseInt(prompt("Enter the element to be searched : "));
var arr = input.split(' ');
function binarySearch(arr , n){
    var low = 0 , high = arr.length - 1;
    while(low <= high){
        var mid = Math.floor((low + high)/2);
        if(parseInt(arr[mid]) === n)
            return mid;
        else if(parseInt(arr[mid]) > n)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}
console.log(binarySearch(arr,n));
