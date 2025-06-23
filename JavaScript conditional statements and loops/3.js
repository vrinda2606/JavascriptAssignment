var a = parseInt(prompt("Enter first no : "));
var b = parseInt(prompt("Enter second no : "));
var c = parseInt(prompt("Enter third no : "));

var ans = [a,b,c];

function sortThree(ans) {
  if (ans[0] < ans[1]) {
    [ans[0], ans[1]] = [ans[1], ans[0]];
  }
  if (ans[0] < ans[2]) {
    [ans[0], ans[2]] = [ans[2], ans[0]];
  }
  if (ans[1] < ans[2]) {
    [ans[1], ans[2]] = [ans[2], ans[1]];
  }
  return ans;
}

console.log(sortThree(ans));
