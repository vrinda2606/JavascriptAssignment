var arr =  [NaN, 0, 15, false, -22, '',undefined, 47, null];

function removal(arr){
    return arr.filter( x => 
           x !== null && x !== 0 && x !== false && x !== ""
           && x !== undefined && !Number.isNaN(x)
    );
}

console.log(removal(arr));
