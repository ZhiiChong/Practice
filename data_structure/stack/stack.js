'use strict'

export { Stack, dec2bin }

class Stack {
  
  constructor() {
    this.items = [];
  }

  // 压栈
  push(item) {
    this.items.push(item);
  }

  // 出栈
  pop() {
    return this.items.pop();
  }

  // 查看栈顶
  peek() {
    return this.items[this.items.length - 1];
  }

  // 检查栈是否为空
  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  // 返回栈大小（元素个数）
  size() {
    return this.items.length;
  }

  // 将栈结构的内容以字符串展示
  toString() {
    let ret = "";
    for (let item of this.items) {
      ret += item + " ";
    }
    // 或者用 return this.items.join(" ")
    return ret;
  }
}

function dec2bin(dec) {
  // 保存余数
  const stack = new Stack();
  // 计算，不确定循环次数用 while
  while(dec > 0) {
    stack.push(dec % 2);
    dec = Math.floor(dec / 2);
  }

  let binaryString = "";

  while(!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString;

}