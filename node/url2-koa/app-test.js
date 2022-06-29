'use strict'

// 先导入 fs 模块，然后用 readdirSync 列出文件
const fs = require('fs');
const router = require('koa-router');

// 用 Sync 是因为启动时只运行一次，不存在性能问题
var files = fs.readdirSync(__dirname + '/controllers');

// 过滤出 js 文件
var js_files = files.filter((f) => {
  return f.endsWith('.js');
})

// 处理每个 js 文件
for (var f of js_files) {
  console.log(`process controller: ${f}...`);

  // 导入 js 文件
  let mapping = require(_dirname + '/controllers/' + f);
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