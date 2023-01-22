class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rare = 0;
    }

    enqueue(elem) {
        this.items[this.rare] = elem;
        this.rare ++;
    }

    dequeue() {
        let item = this.items[this.front];
        delete this.items[this.front];
        this.front ++;
        return item;
    }

    size() {
        return this.rare - this.front;
    }

    isEmpty() {
        return this.rare - this.front === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
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

queue.print(); // {"0":1,"1":2,"2":3}

console.log(queue.isEmpty()); // false

console.log(queue.peek()); // 1

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3

console.log(queue.isEmpty()); // true