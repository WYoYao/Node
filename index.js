
var http=require('http');
var url=require('url');

var obj={"BaseRequest":{"AppVersion":null,"SourceWay":20,"LanguageVersion":0,"TerminalExt":null,"RegistrationId":null,"IMEI":null,"OpEmployeeID":0,"Token":null,"DataCommission":0,"DeptID":0},"JSJID":"421083","Type":"1"};

var buf=new Buffer(JSON.stringify(obj));

var ZRequest={
    ZPack:buf,
    MethodName:'AddInVoiceTitle1'
};

var bSend=new Buffer(JSON.stringify(ZRequest));

console.log(bSend);




//请求指定的参数   请求头
var options={
    //http://memberapi.jsjit.cn/Hosts/User.aspx
    host:'memberapi.jsjit.cn',       //请求的地址
    path:'/Hosts/User.aspx',
    method:'POST',          //请求方式
    headers:{
        'Content-Type':'application/x-protobuf',
        'Cache-Control':'no-cache',
        'Timeout':60000
    }
};




var requset=http.request(options,function(res) {
    res.on("data",function(){
        console.log(arguments[0].toString());
    })
});
requset.write(require('querystring').stringify(ZRequest));
requset.end();