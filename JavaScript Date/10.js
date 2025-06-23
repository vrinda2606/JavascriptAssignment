var date = prompt("Enter the date : ");

function yesterday(date){
    var d = new Date(date);
    d.setDate(d.getDate() - 1);
    return d;
}
console.log(yesterday(date).toString());
