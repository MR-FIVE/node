'use strict';

/**
 * [引入hello.js模块]
 * @type {obj}
 */
let {hello,greet}  = require('./hello.js');

hello();
let str = '小明';
greet(str);
