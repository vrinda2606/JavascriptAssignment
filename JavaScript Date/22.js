var date = prompt("Enter the date : ");

function dayPassed(date){
    var d = new Date(date);
    d = d.getDay();
    if(d == 0)
    return 7;
    else
    return d;
}
console.log(dayPassed(date));
