const temp = prompt("Enter the temperature : ");
const value = parseFloat(temp);
const degree = temp.slice(-1).toUpperCase();

if(degree === "C"){
    const ans = ((9 / 5) * value) + 32;
    console.log(value + "°C is " + ans + "°F");
}
else{
    const ans = (value - 32) * 5 / 9 ;
    console.log(value + "°F is " + ans + "°C");
}
