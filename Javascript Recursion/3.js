var a = 2 , b = 9 ;
var ans = [];
function func(a,b){
    if(a > b) return [];
    if(a === b - 1) return ans;
    return [a+1, ... func(a+1,b)];
}
console.log(func(a,b));
