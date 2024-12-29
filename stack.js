class Stack {
    constructor() {
        this.items = []
    }
    push(value) {
        this.items.push(value)
    }
    pop() {
        this.items.pop()
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length;
    }
    peek() {
        return this.items[this.items.length - 1]
    }
}

const stack = new Stack()
stack.push(1)
stack.push(23)
stack.push(11)
stack.pop()
console.log(stack.size());
