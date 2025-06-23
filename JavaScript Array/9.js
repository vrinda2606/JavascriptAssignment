var str = prompt("Enter your string : ");
var ans = '';
for (let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase())
    ans += str[i].toLowerCase();
    else
    ans += str[i].toUpperCase();
}
console.log(ans);
