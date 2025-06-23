var minutes = parseInt(prompt("Enter the minutes : "));

function addMinutes(date,minutes){
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}
console.log(addMinutes(new Date(),minutes).toString());
