// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    // Write your hypothesis on the time complexity of this method here O(1)
  }

  addToTail(val) {
    // Add node of val to tail of linked list

    const newNode = new DoublyLinkedNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return;
    // Write your hypothesis on the time complexity of this method here O(1)
  }

  removeFromHead() {
    // Remove node at head
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      let oldFirstHead = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldFirstHead.value;
    }
    let oldFirstHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return oldFirstHead.value;
    // Write your hypothesis on the time complexity of this method here O(1)
  }

  removeFromTail() {
    // Remove node at tail
    if (this.length === 0) {
        return undefined;
      }
      if (this.length === 1) {
        let oldLastTail = this.tail;
        this.head = null;
        this.tail = null;
        this.length--;
        return oldLastTail.value;
      }
      let oldLastTail = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return oldLastTail.value;

    // Write your hypothesis on the time complexity of this method here O(1)
  }

  peekAtHead() {
    // Return value of head node
  if(this.length ===0) return undefined;
  return this.head.value;
    // Write your hypothesis on the time complexity of this method here O(1)
  }

  peekAtTail() {
    // Return value of tail node
    if(this.length ===0) return undefined;
    return this.tail.value;
    // Write your hypothesis on the time complexity of this method here O(1)
  }
}
// let list = new DoublyLinkedList();
// list.addToHead('C');
// list.addToHead('B');
// list.addToHead('A');
// console.log(list)
// list.removeFromHead()
// console.log(list)
module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
