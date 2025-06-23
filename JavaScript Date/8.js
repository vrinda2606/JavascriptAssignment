var date1 = prompt("Enter the 1st date : ");
var date2 = prompt("Enter the 2nd date : ");

function dateCompare(date1 ,date2){
    var temp1 = new Date(date1);
    var temp2 = new Date(date2);
    return Math.floor((temp2 - temp1) / (1000 * 60 * 60 * 24));
}
console.log(dateCompare(date1 ,date2));
