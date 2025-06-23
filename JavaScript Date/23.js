var o = ["th","st","nd","rd"];
var date = prompt("Enter the date : ");

 function getSuffix(rank) {
  var deg = rank % 100;
  if (deg >= 11 && deg <= 13) 
  return o[0];

  switch (rank % 10) {
    case 1: return o[1];
    case 2: return o[2];
    case 3: return o[3];
    default: return o[0];
  }
}
function dayPassed(date){
    var d = new Date(date);
    d = d.getDate();
    console.log(d + '' + getSuffix(parseInt(d)));
}

dayPassed(date);
