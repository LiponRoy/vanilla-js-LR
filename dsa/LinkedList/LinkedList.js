// Node class represents each element in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class represents the whole linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a node at the end
    append(value) {
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
        this.size++;
    }

    // Add a node at the beginning
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return null;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    // Print the linked list
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}

// Example usage
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

list.printList(); // 5 -> 10 -> 20 -> 30 -> null

list.delete(20);
list.printList(); // 5 -> 10 -> 30 -> null
