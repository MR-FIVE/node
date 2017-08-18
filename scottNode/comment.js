let http = require('http');
let querystring = require('querystring');

let postData = querystring.stringify({
    'content':'哈哈哈123',
    'mid':8837
});

const options = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'POST',
    headers:{//慕课网评论
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'PHPSESSID=vs23pi7gqkq011fp49mopj9e37; imooc_uuid=8d621c05-72ac-423d-b3cb-7bde63fbe1c7; imooc_isnew=1; imooc_isnew_ct=1503039037; loginstate=1; apsid=VjMjNmNjdmMmZmZTIyZjEzZTBkZTMwODM3OTZhNzYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTM1NzEyOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzZHV0bW5wQDE2My5jb20AAAAAAAAAAAAAAAAAAAAAADJjYjkwZWMwZTRkOWI4M2VhNWNjNzcwYTJmZjNiZWQydI6WWXSOllk%3DMD; last_login_username=sdutmnp%40163.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1501057881,1501127936,1501128145,1503039042; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1503044267; cvde=59968e3d6fb24-133',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
};

let req = http.request(options,function(res){
    console.log('Status:' + res.statusCode);
    console.log('Headers:' + JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });

    res.on('end',function(){
        console.log('评论完毕');
    });

});
req.on('error',function(e){
    console.log("ERROR:" + e.message);
});
req.write(postData);
req.end();
