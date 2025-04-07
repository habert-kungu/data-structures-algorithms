class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }
}
