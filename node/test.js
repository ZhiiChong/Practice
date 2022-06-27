'use strict'

process.nextTick(function () {
  console.log('nextTick callback');
});

console.log('nextTice was set!');

process.on('exit',function (code) {
  console.log('about to exit with code: ' + code);
});