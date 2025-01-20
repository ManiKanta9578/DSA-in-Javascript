const LinkedList = require('./24-LinkedListwithTailImplementation');

class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }
    pop() {
        return this.list.removeFromFront();
    }
    peek() {
        return this.list.head.value;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    getSize() {
        return this.list.getSize();
    }
    print() {
        return this.list.print();
    }
}

const stack = new LinkedListStack();

console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.getSize());
stack.print();
stack.pop();
stack.print();