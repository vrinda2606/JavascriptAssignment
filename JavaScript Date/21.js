var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var date = prompt("Enter the date : ");

function dayPassed(date){
    var d = new Date(date);
    d = d.getDay();
    return days[d];
}
console.log(dayPassed(date));
