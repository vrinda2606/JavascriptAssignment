var start = prompt("Enter the start : ");
var end = prompt("Enter the end : ");
var jump = parseInt(prompt("Enter the jump : "));

function num_string_range(start , end , jump){
    let arr = [];
    if(typeof start === 'number' && typeof end === 'number'){
        for(let i = start ; i < end ; i+=jump){
            arr.push(i);
        }
    }else if(typeof start === 'string' && typeof end === 'string' && 
             start.length === 1 && end.length === 1){
        for(let i = start.charCodeAt(0) ; i < end.charCodeAt(0) ; i+=2){
            arr.push(String.fromCharCode(i));
        }
    }
    return arr;
}

console.log(num_string_range(start , end , jump));
