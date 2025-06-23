function reverseNum(num){
    const ans = num.toString().split('').reverse().join('');
    return parseInt(ans);
}
var num = parseInt(prompt("x = "));
console.log(reverseNum(num));
