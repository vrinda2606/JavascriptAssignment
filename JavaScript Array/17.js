var input = prompt("Enter the array : ");
var arr = input.split(' ');
function shuffle(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));// random no b/w 0 and i
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
var shuffledArray = shuffle(arr);
console.log(shuffledArray);
