'use strict';

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const ctrl = require('./ctrl');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(ctrl());

app.listen(3010);
console.log('app started at port 3010...');
