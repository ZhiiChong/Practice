var x = 100;

function fn(x) {
  return function () {
    console.log(x);
  }
}

var f1 = fn(5);
var f2 = fn('');

//f1();
f2();
f2();