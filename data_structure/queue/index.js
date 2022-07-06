'use strict'

import { Queue, passGame } from './queue.js'

const queue = new Queue();

queue.enqueue(1234);
queue.enqueue(563);
queue.enqueue(873);

console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.front());
console.log(queue.size());
console.log(queue.toString());

const names = ["lily", "lucy", "tom", "tony", "jack"];
const targetIndex = passGame(names, 4);
console.log(targetIndex);
console.log("击鼓传花", names[targetIndex]); //--> lily

// console.log(dec2bin(105));
// console.log(dec2bin(15));


