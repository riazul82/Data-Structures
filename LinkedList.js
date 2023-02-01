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

    // O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size ++;
    }

    // O(1)
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i ++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size ++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i ++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size --;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size --;
            return value;
        } else {
            let prev = this.head;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if(prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size --;
                return value;
            }
            return null;
        }
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while(curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i ++;
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty!');
        } else {
            let curr = this.head;
            let listValues = '';

            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

let list = new LinkedList();

console.log(list.isEmpty()); // true
console.log(list.size); // 0

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.print(); // 30 20 10

console.log(list.isEmpty()); // false
console.log(list.size); // 3

list.append(40);
list.append(50);
list.append(60);

list.print(); // 30 20 10 40 50 60

list.insert(80, 0);
list.insert(100, 3);

list.print(); // 80 30 20 100 10 40 50 60

list.removeFrom(0);
list.print(); // 30 20 100 10 40 50 60 

list.removeFrom(3);
list.print(); // 30 20 100 40 50 60

list.removeValue(30);
list.print(); // 20 100 40 50 60

list.removeValue(100);
list.print(); // 20 40 50 60

list.removeValue(60);
list.print(); // 20 40 50

console.log(list.search(40)); // 1

list.reverse();
list.print(); // 50 40 20