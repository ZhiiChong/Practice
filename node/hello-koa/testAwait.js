'use strict'

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('a1');
  await next(); // 调用下一个 middleware
  console.log('a2');
});

app.use(async (ctx, next) => {
  console.log('b1');
  await next();
  console.log('b2');
  // await next(); --Error: next() called multiple times
  console.log('b3');
});

app.use(async (ctx, next) => {
  console.log('c1');
  await next();
  console.log('c2');
});

app.listen(3000);