var date = prompt("Enter the date : ");

function quarter(date){
    var temp = new Date(date);
    temp = temp.getMonth();
    if(temp <= 2)
    return 1;
    else if(temp <= 5)
    return 2;
    else if(temp <= 8)
    return 3;
    else
    return 4;
}
console.log(quarter(date));
