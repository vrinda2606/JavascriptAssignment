var str = prompt("Enter your string : ");
var ans = 0;
var temp = 'aeiouAEIOU';
for(var i = 0 ; i < str.length ; i++){
    if(temp.includes(str[i]))
    ans++;
}
console.log(ans);
