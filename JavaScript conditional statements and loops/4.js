var a = prompt("Enter the numbers : ");
var ans = a.split(' ');

function sortFive(ans) {
    var t = parseInt(ans[0]);
    for(let i = 1 ; i < ans.length ; i++){
        if(parseInt(ans[i]) > t)
        t= parseInt(ans[i]);
    }
    return t;
}

console.log(sortFive(ans));
