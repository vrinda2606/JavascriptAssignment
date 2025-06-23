function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target){
    return mid;
  } 
  else if (arr[mid] > target){
    return binarySearch(arr, target, left, mid - 1);
  } 
  else{
    return binarySearch(arr, target, mid + 1, right);
  }
}

const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr, 7));  
console.log(binarySearch(arr, 8));  
