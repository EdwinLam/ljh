var dgram = require('dgram');
var mess = new Buffer('您好');
var client = dgram.createSocket('udp4');
client.bind(9000)

client.send(mess,0,mess.length,9001,'192.168.31.42',function (err, bytes) {
  if(err)
    console.log('发送数据失败');
  else {
    console.log('已发送%d字节数据',bytes);
  }
});
client.on('message',function (msg, rinfo) {
  console.log('已接收服务器发送的数据：%s',msg);
  console.log('服务器的地址为%s',rinfo.address);
  console.log('服务器所用端口为%s',rinfo.port);
  client.close();
});
client.on('close',function () {
  console.log('socket端口被关闭');
});

