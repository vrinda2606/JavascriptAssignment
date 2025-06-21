var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, [2], [3, [[4]]],[5,6]];
function flatten(arr){
    var ans = [];
    for(var i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i]))
        ans.push(...flatten(arr[i]));
        else
        ans.push(arr[i]);
    }
    return ans;
}

function difference(arr1 , arr2){
    var ans = [];
     let diff1 = arr1.filter( x => !arr2.includes(x));
     let diff2 = arr2.filter( x => !arr1.includes(x));
    
    return [...diff1, ...diff2].sort( (a,b) => a - b);
}

console.log(difference(flatten(arr1) , flatten(arr2)));
