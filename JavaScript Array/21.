var arr = [1, [2], [3, [[4]]],[5,6]] ;

function flatten(arr , shallow = false){
    var ans = [];

    for(var i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            if(shallow)
            ans.push(...arr[i]);
            else
            ans.push(...flatten(arr[i]));
        }
        else
        ans.push(arr[i]);
    }
    return ans;
}

console.log(flatten(arr));
console.log(flatten(arr,true));
