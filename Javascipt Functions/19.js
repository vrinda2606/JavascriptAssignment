function elementsLargerThan(arr, num) {
    return arr.filter(item => item > num);
}

console.log("\n Return array elements larger than a number:");
console.log(elementsLargerThan([1, 2, 3, 4, 5, 6, 7], 3));
console.log(elementsLargerThan([-10, 0, 10, 20, 30], 15));
