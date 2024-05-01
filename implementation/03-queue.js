const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        // Your code here 
        const newNode = new SinglyLinkedNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            newNode.prev = null;
            newNode.next = null;
            this.length++;
        } else {
            newNode.prev = this.tail;
            newNode.next = null;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this.length;


        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        // Your code here 
        if (this.length === 0) return null;
        if (this.length === 1) {
            const oldHead = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return oldHead.value;
        } else {
            const oldHead = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return oldHead.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

}

let queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
console.log(queue.head.next);
queue.enqueue('C');
console.log(queue.head.next);


module.exports = {
    Queue,
    SinglyLinkedNode
}
