'use strict'

const fs = require('fs');

function addMapping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET ')) {
      // 如果 url 以 "GET " 开头
      var path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith('POST ')) {
      // 如果 url 以 "POST " 开头
      var path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else {
      // 无效的 url
      console.log(`invalid URL: ${url}`);
    }
  }
}

function addControllers(router, dir) {
  var files = fs.readdirSync(dir);
  var js_files = files.filter((f) => {
    return f.endsWith('.js');
  });

  for (var f of js_files) {
    console.log(`process controller: ${f}...`);
    let mapping = require(dir + f);
    addMapping(router,mapping);
  }
}

module.exports = function (dir) {
  let
    controller_dir = dir || './controllers/',  // 默认扫描目录为 controllers
    router = require('koa-router')();
  addControllers(router, controller_dir);
  return router.routes();
}
