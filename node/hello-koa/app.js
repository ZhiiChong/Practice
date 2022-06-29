'use strict'
// 导入 koa
const Koa = require('koa');

// 创建一个 Koa 对象表示 web app 本身
const app = new Koa();

// 对于任何请求，app 将调用该异步函数处理请求
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口 3000 监听
app.listen(3000);
console.log('app started at port 3000...');