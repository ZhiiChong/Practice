'use strict'

var fs = require('fs');

var newInput = 'new input';

var anotherInput = 'this is another test';

fs.writeFile('./output.txt',newInput,function(err){
  if (err) {
    console.log(err);
  }
});

fs.readFile('./output.txt','utf-8',function (err,data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

try {
  fs.writeFileSync('output.txt',anotherInput);
} catch (err) {
  console.log(err);
}

try {
  var data = fs.readFileSync('output.txt','utf-8');
  console.log(data);
} catch (err) {
  console.log(err);
}

fs.stat('./output.txt',function (err, stat) {
  if (err) {
    console.log(err);
  } else {
    console.log('isFile: ' + stat.isFile());
    console.log('isDirectory:' + stat.isDirectory());
    if (stat.isFile()) {
      console.log('size: ' + stat.size);
      console.log('birth time: ' + stat.birthtime);
      console.log('modified time: ' + stat.mtime);
    }
  }
});