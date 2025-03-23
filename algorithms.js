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
function maximumProfit(prices) {
    let res = 0;
    const n = prices.length;
    for (let i = 1; i < n; i++) {
        if (prices[i] > prices[i - 1]) {
            res += prices[i] - prices[i - 1];
        }
    }
    return res;
}
const prices = [100, 180, 260, 310, 40, 535, 695];
console.log(maximumProfit(prices));
