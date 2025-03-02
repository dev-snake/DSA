var addBinary = function (a, b) {
    const value_of_a = convert_binary(a);
    const value_of_b = convert_binary(b);
    return value_of_a;
    let sum_of_a_and_b = value_of_a + value_of_b;
    const arr = [];
    while (+sum_of_a_and_b > 0) {
        arr.push(sum_of_a_and_b % 2);
        sum_of_a_and_b = Math.floor(sum_of_a_and_b / 2);
    }
    return arr.reverse().join('');
};
const convert_binary = (str) => {
    let num = 0;
    for (let index = str.length - 1; index >= 0; index--) {
        num += parseInt(BigInt(str[index]) * Math.pow(2, str.length - 1 - index));
    }
    return num;
};
console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '1'));
