var year = prompt("Enter the year : ");
var month = prompt("Enter the month : ");

function lastDay(year ,month){
    return new Date(year,(parseInt(month) + 1 ).toString(),0).getDate();
}
console.log(lastDay(year ,month));
