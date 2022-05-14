class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        let node = this.head
        for (let i = 1; i < this.length - 1; i++) {
            node = node.next;
        }
        node.next = null;
        this.tail = node
        this.length--
        return node
    }
    shift() {
        if (!this.head) {
            return undefined
        }
        let node = this.head;
        this.head = node.next;
        this.length--
        return node
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let currentHead = this.head;

            this.head = newNode;
            this.head.next = currentHead
        }
        this.length++
        return this.length;
    }
    get(index) {
        
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next
        }
        return node
    }
    set(val, index) {

        let newNode = new Node(val);
        let postNode = this.head;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            for (let i = 0; i < index - 1; i++) {
                postNode = postNode.next;
                console.log('i-->', i)
            }
            if (index == 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                newNode.next = postNode.next;
                postNode.next = newNode
            }
            this.length++
        }
        return this
    }
}

let list = new SinglyLinkedList();
list.push('Game');
list.push('Church');
list.push('Meteor');
list.push({ country: 'Niger', state: 'Bayelsa' });
list.push(['Blink', 2, 'Age'])

console.log(list.set('Flake', 0))

console.log(list.get(1))