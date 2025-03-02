class Stack {
    constructor() {
        this.items = [];
    }
    push(value) {
        return this.items.push(value);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}
function isPalindrome(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    for (let char of str) {
        if (char !== stack.items.pop()) {
            return false;
        }
    }
    return true;
}
function converToBinary(number) {
    const stack = new Stack();
    while (number > 0) {
        stack.push(number % 2);
        number = Math.floor(number / 2);
    }
    let binary = '';
    while (!stack.isEmpty()) {
        binary += stack.pop();
    }
    return binary;
}
function isValid(str) {
    const stack = new Stack();
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    console.log(stack.items);
    for (let char of str) {
        if (char === '{' || char === '(' || char === '[') {
            stack.push(char);
        } else if (char === '}' || char === ')' || char === ']') {
            if (stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}
console.log(converToBinary(4));
