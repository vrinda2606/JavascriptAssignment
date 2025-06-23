var a = 3 ;
var b = 5;

function func(a,b){
    var arr = [];
    for(var i = 1 ; i <= 100 ; i++){
        if(parseInt(i) % 15 === 0)
        arr.push("FizzBuzz");
        else if(parseInt(i) % 5 === 0)
        arr.push("Fizz");
        else if(parseInt(i) % 5 === 0)
        arr.push("Buzz");
        else
        arr.push(i);

    }
    return arr;
}
console.log(func(a,b));
