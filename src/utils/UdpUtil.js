export default class UDP {
  constructor () {
    this.DatagramPacket = plus.android.importClass('java.net.DatagramPacket')
    this.DatagramSocket = plus.android.importClass('java.net.DatagramSocket')
    this.InetAddress = plus.android.importClass('java.net.InetAddress')
    this.String = plus.android.importClass('java.lang.String')
    
    //add by xing
    let StrictMode = plus.android.importClass("android.os.StrictMode");
    let Build = plus.android.importClass("android.os.Build");
        
    if (Build.VERSION.SDK_INT > 9) {
    	let policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
      StrictMode.setThreadPolicy(policy);
    }
  }

  sendMsg ({msg, callbackFunction}) {
  	
  	console.log('send msg:' + msg)
    let u = unescape(encodeURIComponent(msg));
    let s = []
    	for(let i = 0;i < u.length;i++)
    		s.push(u.charCodeAt(i))
    		
  	//add by xing
  	let ds0 = new this.DatagramSocket()
  	
  	let i,j
		
		for(j = 0; j<7;j++){
			let buf = [1,2,3,4]
			let t = '234.12.0.' + s.length
			
			console.log(j + ': ' + t)
			
			let ip = this.InetAddress.getByName(t)
			let p = new this.DatagramPacket(buf,buf.length,ip,9001)
			ds0.send(p)
			
			for(i = 1;i <= s.length;i++){
				//let buf = [1,2,3,4]
				let t = '234.12.' + i + '.' + s[i-1]//s.charCodeAt(i-1)
				
				let ip = this.InetAddress.getByName(t)
			 
				let p = new this.DatagramPacket(buf,buf.length,ip,9001)
				ds0.send(p)
				//console.log(t)
			}
    }
  	//end
  	
    let ds = new this.DatagramSocket(9000)
    ds.setSoTimeout(1000)
    let messageReceived = false
    let repeatCount = 0
    let result = {}
    
    let cacheItems = []
        var str = ''
        for (let i = 0; i < 256; i++) {
          str += ' '
        }
    cacheItems = new this.String(str).getBytes('utf-8')
    let dp2 = new this.DatagramPacket(cacheItems, cacheItems.length)
       
    while (!messageReceived) {
      try {
         
        ds.receive(dp2)
        let dpData = new this.String(dp2.getData())
        result = dpData.trim()
        messageReceived = true
        ds.close()
      } catch (e) {
        console.log(e)
        repeatCount++
        if (repeatCount > 10) {
          messageReceived = true
          ds.close()
          callbackFunction(null)
          
        }
      }
    }
    ds.close()
    callbackFunction(result)
  }
}
