var info = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekDay = days[info.getDay()];
let hours = info.getHours();
var minutes = info.getMinutes();
var seconds = info.getSeconds();
var zone = hours < 12 ? 'AM' : 'PM' ;

hours = hours % 12 === 0 ? 12 : hours % 12;
minutes = minutes < 10 ? '0'+minutes : minutes ;
seconds = seconds < 10 ? '0'+seconds : seconds ;

console.log("Today is : " + weekDay);
console.log("Current time is : " + hours + " " + zone + " : " + minutes + " : " + seconds );
