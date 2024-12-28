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
    if (!this.head.value === value) return true;
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
  show() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value)
      current = current.next;
    }
    console.log(values)
  }
}
const list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)
list.add(3)
list.add(3)
// list.deleteNode(3)
list.find(3)
// list.show()
console.log(list.find(10))