'use strict';

/**
 * [自定义模块]
 * @type {obj}
 */
function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

module.exports = {
    hello: hello,
    greet: greet,
};
