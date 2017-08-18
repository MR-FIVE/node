let http = require('http');
const url = 'http://www.fitpass.cn/';

http.get(url,function(res){
    let html = '';
    res.on('data',function(data){
        html += data;
    });
    res.on('end',function(){
        console.log(html);
    })
})
.on('error',function(){
    console.log('获取数据出错');
})
