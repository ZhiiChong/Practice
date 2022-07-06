var a = 10;

function fn() {
  var b = 20;

  function bar() {
    [a, b] = [a + b, a];
    // b = a;
    console.log(a);
    console.log(b);
  }

  return bar;
}

a = 100;

var x = fn(),
    b = 200;

x();
x();
x();