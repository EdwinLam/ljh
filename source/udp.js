/* 创建简单的UDP服务器 */
var dgrm = require('dgram')
var server = dgrm.createSocket('udp4')// udp4为指定UDP通信的协议类型
server.on('message', function (msg, rinfo) {
  var info = {
    device_id: new Date().getTime(),
    device_type: '1',
    device_description: '普通的设置'
  }
  console.log(rinfo.address)
  console.log('已接收客户端发送的数据：' + msg)
  console.log('客户端地址信息为%j', rinfo)
  var buf = new Buffer('确认信息：' + msg)
  var buf = new Buffer(JSON.stringify(info))
  console.log(JSON.stringify(info))
  console.log(JSON.stringify(rinfo))
  // server.sent(Buffer,offset,length,port,address,[callback])
  server.send(buf, 0, buf.length, 9000, rinfo.address)
})
// 当socket对象开始监听指定的端口和地址时，触发socket端口的listening事件
/* server.on('listening',function () {
    var address = server.address();
    console.log('服务器开始监听。地址信息为&j',address);
}); */
server.bind(9001, '192.168.31.42', function () {
  // bind方法中也可以不写回调函数，单独监听listening事件
  var address = server.address()
  console.log('服务器开始监听。地址信息为&j', address)
})
