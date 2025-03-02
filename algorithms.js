function rearrangeArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if ((i + 1) % 2 === 0) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            }
        } else {
            if (arr[i] > arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            }
        }
    }
    return arr;
}
const arr = [1, 3, 2];
const res = rearrangeArray(arr);
console.log(res);
