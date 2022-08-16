"use strict";
const Stack = require('./Stack.js');
function reverseK(queue, k) {
    if (queue.isEmpty() === false) {
        let myStack = new Stack();
        var count = 0;
        while (count < k) {
            myStack.push(queue.dequeue())
            count++;
        }
       
        while (myStack.isEmpty() == false) {
            queue.enqueue(myStack.pop());

        }

        for (var i = 0; i < (queue.size() - k); i++) {
            queue.enqueue(queue.dequeue());
        }
    }

    return queue;
}