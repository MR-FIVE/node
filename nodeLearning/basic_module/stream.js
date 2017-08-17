'use strict';

let fs = require('fs');

// -----------------------------------------------------------------------------
/**
 * 最初接触stream模块，觉得功能跟fs没有什么特别大的出入，理解过后可以知道，两个模块确实都可以完成简单的文件读写操作，
 * fs无论是异步或是同步，都是等文件读取完成，才进行操作的;
 * 但是在服务器端，文件体积一般很庞大，用这种方式效率低下，导致线程阻塞，甚至会因为内存不足而崩溃。
 * nodejs中Stream是EventEmitter的实现，你可以理解为在程序后台打开了一个文件(不占用主线程)，
 * 程序会一点一点的读取(写入)文件，通过事件和回调来完成文件的读写
 * @type {[type]}
 */
// 所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable。
/**
 * [打开一个流]
 * @type {[type]}
 */
let rs = fs.createReadStream('../common/SteveJobs.txt','utf8');
// 读取文件
rs.on('data',function(chunk){
      // console.log('DATA:');
      // console.log(chunk);
});
// 结束
rs.on('end',function(){
      // console.log('END');
});
// 捕获错误
rs.on('error',function(){
      // console.log('ERROR:' + error);
});

// -----------------------------------------------------------------------------
/**
 * [以流形式写入文件]
 * @type {[type]}
 */
let ts1 = fs.createWriteStream('../common/test1.txt','utf-8');
ts1.write('使用Stream写入文本数据...\n');
ts1.write('END.');
ts1.end();

let ts2 = fs.createWriteStream('../common/test2.txt');
ts2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ts2.write(new Buffer('END.', 'utf-8'));
ts2.end();

// -----------------------------------------------------------------------------
/**
 *  [在文件读取的回调函数里进行数据的写入也可已完成复制类的数据流操作]
 * [pipe 我称作管方法，其实就是复制，将读取出的数据通过管道的形式注入到目标文件当中去，实现了文件的复制]
 * @type {[type]}
 */
// 读取要复制的数据
let sj = fs.createReadStream('../common/SteveJobs.txt','utf-8');
// 要写入数据的目标文件
let ws = fs.createWriteStream('../common/test1.txt','utf-8');
// 进行注入
sj.pipe(ws);

fs.createReadStream('../common/test1.txt','utf-8').on('data',function(chunk){
      console.log('sj注入ws成功后的文件:');
      console.log(chunk);
});
















1
