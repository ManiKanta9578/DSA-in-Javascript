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

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.prepend(value);
        } else {
            let node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) return null;
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) return null;

        if (this.head.value === value) {
            this.head = this.head.next
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) console.log("List is Empty");

        let curr = this.head;
        let i = 0;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let curr = this.head;
            let linkedList = '';
            while (curr) {
                linkedList += `${curr.value} `;
                curr = curr.next;
            }
            console.log(linkedList);
        }
    }
}

let list = new LinkedList();

console.log("List is Empty? ", list.isEmpty());
console.log("List Size: ", list.getSize());
list.print();
list.append(10)
list.print();
list.append(20)
list.append(30)
list.print();
list.insert(40, 2);
list.print();

// console.log(list.removeFrom(0));
// list.print();

// console.log(list.removeValue(40));
list.print();

console.log(list.search(30));

list.reverse();
list.print();