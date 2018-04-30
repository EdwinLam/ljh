export default class UDP {
  constructor () {
    this.DatagramPacket = plus.android.importClass('java.net.DatagramPacket')
    this.DatagramSocket = plus.android.importClass('java.net.DatagramSocket')
    this.InetAddress = plus.android.importClass('java.net.InetAddress')
    this.String = plus.android.importClass('java.lang.String')
  }

  sendMsg ({port, msg, callbackFunction}) {
    let ds = new this.DatagramSocket()
    ds.setSoTimeout(1000)
    let messageReceived = false
    let data = new this.String(msg).getBytes('utf-8')
    let iAdd = new this.InetAddress()
    let dp = new this.DatagramPacket(data, data.length, iAdd.getByName('255.255.255.255'), port)
    let repeatCount = 0
    let result = {}
    while (!messageReceived) {
      try {
        let cacheItems = []
        var str = ''
        for (let i = 0; i < 512; i++) {
          str += ' '
        }
        cacheItems = new this.String(str).getBytes('utf-8')
        let dp2 = new this.DatagramPacket(cacheItems, cacheItems.length)
        ds.send(dp)
        ds.receive(dp2)
        let dpData = new this.String(dp2.getData())
        result = dpData.trim()
        messageReceived = true
      } catch (e) {
        console.log(e)
        repeatCount++
        if (repeatCount > 20) {
          messageReceived = true
          callbackFunction()
          ds.close()
        }
      }
    }
    callbackFunction(result)
  }
}
