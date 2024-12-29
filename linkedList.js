class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++
  }
  deleteDuplicates(value) {
    if (!this.head) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }
  }
  deleteFirstNode(value) {
    if (!this.head) return null;
    if (!this.head.value === value) {
      this.head === this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }
  getSize() {
    return this.size;
  }
  find(value) {
    if (!this.head) return null;
    if (this.head.value === value) return true;
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  insertAt(value, index) {
    const newNode = new Node(value);
    if (index === 0 || !this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode
    console.log(current, 'newNode')
  }
  findMax() {
    if (!this.head) return null;
    let max = this.head.value;
    let current = this.head;
    while (current.next) {
      if (current.next.value > max) {
        max = current.next.value;
      } else {
        current = current.next;
      }
    }
    return max;
  }
  show() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value)
      current = current.next;
    }
    console.log(values)
  }
  showNode() {
    return console.log(this.head)
  }
}
const list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)
list.add(3)
list.add(0)
list.insertAt(99, 2)
list.show()
// list.showNode()