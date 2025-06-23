function getSubsets(arr, length) {
    const subsets = [];
    const helper = (start, subset) => {
        if (subset.length === length) {
            subsets.push(subset.slice());
            return;
        }
        for (let i = start; i < arr.length; i++) {
            subset.push(arr[i]);
            helper(i + 1, subset);
            subset.pop();
        }
    };
    helper(0, []);
    return subsets;
}

console.log("\n Get all possible subsets of fixed length from an array:");
console.log(getSubsets([1, 2, 3], 2));
