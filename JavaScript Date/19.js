var date = prompt("Enter the date : ");

function dayPassed(date){
    var d = new Date(date);
    d = d.getMonth();
    if(d >= 10)
    return d;
    else
    return '0' + d;
}
console.log(dayPassed(date));
