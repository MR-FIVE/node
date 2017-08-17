'use strict';
// 引入fs模块
let fs = require('fs');

// -----------------------------------------------------------------------------
/**
 * [写入文件]
 * @param {[type]} err
 * @return {[type]} [description]
 */
// 清空后书写
const str = 'I love china' ;
fs.writeFile('../common/test1.txt',str,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
});
// 不清空追加(未实现想法，后续跟进)
// const dataone = 'I am iron man' ;
// fs.open('../common/test1.txt','a',function(err,fd){
//       if(err){
//           console.log(err);
//       }else{
//           console.log('open');
//           fs.writeFile(fd,dataone,function(err){
//               if (err) {
//                   console.log(err);
//               }else{
//                   console.log('ok new');
//               }
//           });
//       }
// });

/**
 * [这个api也可以进行追加的书写]
 */
fs.appendFile('../common/test1.txt','\n Hello Node',err => {
      if(err){
          console.log(err);
      }else{
          console.log('appendFile is ok');
      }
});


// -----------------------------------------------------------------------------
/**
 * [读取文件]
 * @param {[type]} err
 * @param {[type]} data
 * @return {[type]} [description]
 */
fs.readFile('../common/test1.txt','utf-8',function(err,data){
  if(err){
      console.log(err);
  }else{
      console.log(data);
  }
});

// -----------------------------------------------------------------------------
/**
 * [获取文件信息]
 * @param {[type]} err
 * @param {[type]} data
 * @return {[type]} [description]
 */
fs.stat('../common/test1.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

// -----------------------------------------------------------------------------
/**
* 同步读取文件：readFileSync();
* 同步写入文件：writeFileSync();
* 同步获取文件信息：statSync();
*/
// 由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。
// 服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。
