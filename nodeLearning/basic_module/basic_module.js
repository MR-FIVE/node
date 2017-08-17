'use strict';

/**
 * global[node的全局对象]
 * process[node进程控制对象]
 * 通过process.nextTick()可以在下一次循环的时候执行函数,通过process.on('on'，function(){})，可以在程序退出的时候执行函数
 */




 // process.nextTick()将在下一轮事件循环中调用:
 process.nextTick(function () {
     console.log('nextTick callback!');
 });
 console.log('nextTick was set!');

 // 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

// 判断JavaScript执行环境
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
