'use strict'

export { Queue, passGame }

class Queue {

  constructor() {
    this.items = [];
  }

  enqueue(ele) {
    this.items.push(ele);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  size() {
    return this.items.length;
  }

  toString() {
    let ret = "";
    for (let item of this.items) {
      ret += item + " ";
    }
    return ret;
  }

}

function passGame(nameList, number) {

  const queue = new Queue();

  for (let name of nameList) {
    queue.enqueue(name);
  }

  // console.log(queue.toString());
  // console.log(queue.size());

  while (queue.size() > 1) {

    for (let i = 0; i < number-1; i++) {
      // console.log(queue.dequeue())
      queue.enqueue(queue.dequeue());
    }

    queue.dequeue();
  }

  const winner = queue.front();

  return nameList.indexOf(winner);

}