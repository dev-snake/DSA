function binarySearch(arr, targetValue) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === targetValue) return mid;
    if (arr[mid] < targetValue) {
      left = mid - 1;
    } else {
      right = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 3));
