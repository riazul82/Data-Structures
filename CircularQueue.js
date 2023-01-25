class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rare = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rare = (this.rare + 1) % this.capacity;
            this.items[this.rare] = element;
            this.currentLength += 1;
            if(this.front === -1) {
                this.front = this.rare;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rare = -1;
        }
        return item;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    print() {
        if (!this.isEmpty()) {
            console.log(JSON.stringify(this.items));
        } else {
            console.log('Queue is Empty!');
        }
    }
}

const Queue = new CircularQueue(5);

console.log(Queue.isEmpty()); // true

Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
Queue.enqueue(40);
Queue.enqueue(50);

Queue.print(); // [10,20,30,40,50]

console.log(Queue.isFull()); // true

console.log(Queue.peek()); // 10

console.log(Queue.dequeue()); // 10
console.log(Queue.dequeue()); // 20
console.log(Queue.dequeue()); // 30

Queue.print(); // [null,null,null,40,50]

console.log(Queue.dequeue()); // 40
console.log(Queue.dequeue()); // 50

Queue.print(); // Queue is Empty!

console.log(Queue.isEmpty()); // true