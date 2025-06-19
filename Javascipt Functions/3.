var str = prompt("Enter your string : ");
var arr = {};
var ans = [];
for(var i = 0 ; i < str.length ; i++){
    var temp = '';
    for(var j = i ; j < str.length ; j++){
        temp += str[j];
        if(!arr[temp]){
            arr[temp] = 1;
            ans.push(temp);
        }
    }
}
console.log(ans);
