class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
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

const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(1);
stack.push(2);
stack.push(3);

stack.print(); // 1, 2, 3

console.log(stack.isEmpty()); // false

console.log(stack.peek()); // 3

console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1

console.log(stack.isEmpty()); // true