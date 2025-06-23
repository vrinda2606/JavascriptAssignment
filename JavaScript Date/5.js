var date1 = prompt("Enter the 1st date : ");
var date2 = prompt("Enter the 2nd date : ");

function dateCompare(date1 ,date2){
    var temp1 = new Date(date1);
    var temp2 = new Date(date2);
    
    temp1 = temp1.getTime();
    temp2 = temp2.getTime();
    if(temp1 === temp2)
    console.log("Date1 = Date2");
    else if(temp1 > temp2)
    console.log("Date1 > Date2");
    else
    console.log("Date2 > Date1");
}
dateCompare(date1 ,date2);
