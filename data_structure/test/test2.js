'use strict'

function fn(){
  //var max = 10,
      //y = 1;
  // console.log(y);
  return function bar(x) {
    max = max - 1;
    if (x < max) {
      console.log(x);
      console.log(max);
    }
  }
}

var f1 = fn(),
    max = 100,
    min = 20;

max = 150

while(max>95) {
  f1(101);
  
  console.log(max);
  max--;
}
f1(97);