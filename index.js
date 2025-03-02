function checkDuplicatesWithinK(arr, k) {
    const s = new Set();
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (s.has(arr[i])) return true;
        s.add(arr[i]);
        if (i >= k) {
            s.delete(arr[i - k]);
        }
    }
}
const arr = [10, 5, 3, 4, 3, 5, 6];
console.log(checkDuplicatesWithinK(arr, 3));
