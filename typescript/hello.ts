// this is an industrial-grade general-purpose greeter function:
function greet(person : String, date : Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Jerry', new Date());
// console.log('Hellow world!')
