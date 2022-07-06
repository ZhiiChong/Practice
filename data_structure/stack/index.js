'use strict'

import { Stack, dec2bin } from './stack.js'

const stack = new Stack();

stack.push(1234);
stack.push(563);
stack.push(873);

console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.toString());
console.log(dec2bin(105));

console.log(dec2bin(15));


