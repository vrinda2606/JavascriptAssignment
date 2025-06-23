var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
var date = prompt("Enter the date : ");

function dayPassed(date){
    var d = new Date(date);
    d = d.getDay();
    return days[d];
}
console.log(dayPassed(date));
