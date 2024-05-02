// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    this.length++;
    return this.head;
  }

  listLength() {
    // let count = 0;
    // let current = this.head;
    // while (current) {
    //   current = current.next;
    //   count++;
    // }
    // return count;

    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity

    return this.length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    let sum = 0;
    if (this.length === 0) {
      return sum;
    }
    let current = this.head;

    while (current) {
      sum += current.value;
      current = current.next;
    }
    return sum;
    // Write your hypothesis on the time complexity of this method here O(n)
  }

  averageValue() {
    // Returns the average value of all the nodes
    return this.sumOfNodes() / this.length;
    // Write your hypothesis on the time complexity of this method here
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === n) return current;
      current = current.next;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  findMid() {
    let n = Math.ceil(this.length / 2) - 1;
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    let current = this.head;
    for (let i = 0; i <= n; i++) {
      if (i === n) return current;
      current = current.next;
    }

    // Write your hypothesis on the time complexity of this method here O(n/2)
  }

  addToHead(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Try implementing it by returning a new linked list then returning
    // the original linked list reversed in place
    // Does the time complexity change? How about space complexity?
    // Your code here

    // let current = this.head;
    // const newList = new SinglyLinkedList();
    // if (current.next === null) return newList.addToTail(current.value);
    // this.head = this.next;
    // this.reverse()

    // let newList = new SinglyLinkedList();
    // let current = this.head;
    // let tail;
    // while (current) {
    //     if (current.next === null) {
    //         tail = current;
    //     }
    //     current = current.next;
    // }

    // while (tail) {
        
    //     newList.addToTail(tail.value);
    //     if (tail.prev === null) return newList;
    //     tail = tail.prev;
    // }
    let newList = new SinglyLinkedList();
    let current = this.head;
    while (current) {
        newList.addToHead(current.value);
        current = current.next;
    }
    return newList;
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Your code here
    let current = this.head;
    let pre = null;
    let temp;
    let last;
    let count = 0;
    while (current) {
        if (current.next === null) {
            current.next = 
            this.head = current;
            return this;
        }
        temp = current.next;
        if (count === 0) {
            current.next = null;
        } else {
            current.next.next = current;
        }
        current = temp;
        count++;
        
    }

    // Write your hypothesis on the time complexity of this method here
  }
}

list = new SinglyLinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
console.log(list.reverseInPlace())

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
