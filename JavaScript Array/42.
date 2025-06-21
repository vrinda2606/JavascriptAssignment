var arr1 = [1, 2, 3, 4, 5];
var arr2 =  [1, [2], [3, [[4]]],[5,6]];

var arr3 = [1, 2, 3];
var arr4 =  [100, 2, 1, 10];

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

function unique(arr1 , arr2){
    arr1 = flatten(arr1);
    arr2 = flatten(arr2);
    let uni1 = arr1.filter( x => !arr2.includes(x));
    return [...uni1 , ...arr2];
}

console.log(unique(arr1 , arr2));
console.log(unique(arr3 , arr4));
