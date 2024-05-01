// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here 
        const newNode = new SinglyLinkedNode(val);
            let current = this.head;
            this.head = newNode;
            newNode.next = current;
            this.length++;
            return this;
        // Write your hypothesis on the time complexity of this method here O(1)    
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        

        return this;

        // Write your hypothesis on the time complexity of this method here O(n)
    }

    removeFromHead() {
        // Remove node at head

        // Your code here 
        if (this.length === 0) return undefined;
        const head = this.head;
        this.head = this.head.next;
        this.length--;
        return head;

        // Write your hypothesis on the time complexity of this method here O(1);
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here 
        if (this.length === 0) return undefined;
        let current = this.head;
        if (this.length === 1) {
            let tail = this.head;
            this.head = null;
            this.length--;
            return tail;
        }
        while (current.next.next) {
            current = current.next;
        }
        let tail = current.next;
        current.next = null;
        this.length--;
        return tail;

        // Write your hypothesis on the time complexity of this method here O(n)
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here 
        if (this.length === 0) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here O(1)
    }

    print() {
        // Print out the linked list
        // Your code here 
        if (this.length === 0) return;
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }



        // Write your hypothesis on the time complexity of this method here
    }
}
let linkedList = new SinglyLinkedList();
linkedList.addToTail('B');
linkedList.addToTail('C');
linkedList.addToTail('D');
linkedList.addToHead('A');
linkedList.print();

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
