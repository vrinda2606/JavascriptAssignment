var a = 5;
var b = 6;
var c = 7;
var semiPer = (a + b + c) / 2 ;
var area = Math.sqrt(semiPer * (semiPer - a) * (semiPer - b) * (semiPer - c));
console.log(area.toFixed(3));
