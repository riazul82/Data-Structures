class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(elem) {
        this.items.push(elem);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(JSON.stringify(this.items));
    }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // [1, 2, 3]

console.log(queue.isEmpty()); // false

console.log(queue.peek()); // 1

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3

console.log(queue.isEmpty()); // true