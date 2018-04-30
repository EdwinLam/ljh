var express = require('express')
var async = require('async')
var mqtt = require('mqtt')
var bodyParser = require('body-parser');

const {Database, Model} = require('mongorito');

let moment = require('moment')

class Home extends Model {}
class Device extends Model {}
class User extends Model {}

var mqttClient = mqtt.connect('mqtt://127.0.0.1')

mqttClient.on('connect',function(){
		console.log('mqtt connected')
	})

var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000
var router = express.Router()

router.get('/',function(req,res){
	res.json({ message: 'welcome to Ljhlink IOT api server (C)联家汇2018' });   
})


/*
 * 1. 用户管理API
 */
let md5 = require('md5')

//1.1 /usr/register
async function register(req,res){
	
	let pass = req.body.password
	let phone = req.body.phone
	let home_name = req.body.home_name
	let usr_name = req.body.usr_name
	let code = req.body.code
	
	if(!phone || !home_name ||!pass || !usr_name){
		res.json({code:400,msg:'手机号/密码/家庭不能为空'})
		return
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(User)
	db.register(Home)
	
	
	let u = await User.findOne({phone:phone})
	
	if(u){
		await db.disconnect()
		
		res.json({code:400,msg:'该手机已注册'})
		return
	}
	
	let id = md5(pass + phone + home_name + usr_name + moment().format('x')).substr(0,12)
	
	h = new Home({
		members:[{phone:phone,name:usr_name}],
		home_name:home_name,
		home_id:id,
		devices:[],
		tasks:[]
	})
	
	u = new User({
		password:pass,
		phone:phone,
		home_id:id,
		name:usr_name
	})
	
	await u.save()
	await h.save()
	
	mqttClient.publish('add_home',id)

	let d = {
		isLogin:true,
		phone:u.get('phone'),
		usr_name:u.get('name'),
		home_name:h.get('home_name'),
		home_id:h.get('home_id'),
		devices:[],
		tasks:[],
	}
	
	await db.disconnect()
	res.json({code:200,msg:'ok',data:d})	
}

router.route('/usr/register')
	.post(function(req,res){
		register(req,res)	
	})

// 1.2 /usr/login
async function login(req,res){
	
	let pass = req.body.password
	let phone = req.body.phone
	
	if(!pass || !phone){
		res.json({code:400,msg:'手机/密码不能为空'})
		return
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(User)
	db.register(Home)
	db.register(Device)
	
	let u = await User.findOne({phone:phone,password:pass})
	
	if(!u){
		await db.disconnect()
		
		res.json({code:400,msg:'用户/密码有误'})
		return
	}
	
	let h = await Home.findOne({home_id:u.get('home_id')})
	if(!h){
		await db.disconnect()
		
		res.json({code:400,msg:'无注册家庭'})
		return
		
	}
	
	let d = {
		isLogin:true,
		home_name:h.get('home_name'),
		home_id:h.get('home_id'),
		phone:u.get('phone'),
		usr_name:u.get('name'),
		devices:h.get('devices'),
		tasks:h.get('tasks')
	} 
	
	for (let i in d.devices ){
		let t = []
		let state = "offline"
		let data = 0
		
		let di = await Device.findOne({device_id:d.devices[i].device_id})
		if(di){
			state = di.get('state')			
			data = di.get('data')
		}
		d.devices[i].state = state
		d.devices[i].data = data
	}
	
	await db.disconnect()

	return res.json({code:200,msg:'ok',data:d})
}

router.route('/usr/login')
	.post(function(req,res){
		login(req,res)
	})

// 1.3 /usr/logout 
router.route('/usr/logout')
	.post(function(req,res){
		return res.json({code:200,msg:'ok'})
	
	})

//1.4 /usr/update
async function usr_update(req,res){
	let phone = req.body.phone
	let name = req.body.name
	let password = req.body.password
	
	if(!phone){
		res.json({code:400,msg:'手机不能为空'})
		return
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(User)
			
	let u = await User.findOne({phone:phone})
	
	if(!u){
		await db.disconnect()
		
		res.json({code:400,msg:'无此用户'})
		return
	}
	
	if(password){
		u.set('password',password)
	}
	
	if(name){
		u.set('name',name)
	}
	
	if(password || name){
		await u.save()
	}
	
	await db.disconnect()
		
	return res.json({code:200,msg:'ok'})
	
	
}

router.route('/usr/update')
	.post(function(req,res){
		member_update(req,res)
	})


//2.1 /sms/send
//2.2 /sms/validation

//3.1 /home/update
async function home_update(req,res){
	let home_id = req.body.home_id
	let name = req.body.name
	
	if(!home_id || !name){
		res.json({code:400,msg:'参数不能为空'})
		return
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Home)
			
	let h = await Home.findOne({home_id:home_id})
	
	if(!h){
		await db.disconnect()
		
		res.json({code:400,msg:'无此家庭'})
		return
	}
	
	
	h.set('name',name)
	
	
	await h.save()
	
	await db.disconnect()
		
	return res.json({code:200,msg:'ok'})
	
	
}

router.route('/home/update')
	.post(function(req,res){
		home_update(req,res)
	})

// 4.1 /member/list
async function member_list(req,res){
	let home_id = req.body.home_id
	
	if(!home_id){
		res.json({code:400,msg:'家庭不能为空'})
		return
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Home)
	db.register(User)
		
	let h = await Home.findOne({home_id:home_id})
	
	if(!h){
		await db.disconnect()
		
		res.json({code:400,msg:'无此家庭'})
		return
	}
	
	let ms = h.get('members')
	
	await db.disconnect()
		
	return res.json({code:200,msg:'ok',members:ms})
	
	
}

router.route('/member/list')
	.post(function(req,res){
		member_list(req,res)
	})


// 4.2 /member/add
async function member_add(req,res){
	let phone = req.body.phone
	let name = req.body.name
	let password = req.body.password
	let home_id = req.body.home_id
	
	if(!home_id || !password || !phone || !name){
		res.json({code:400,msg:'参数不能为空'})
		return
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(User)
	db.register(Home)
	
	
	let u = await User.findOne({phone:phone})
	
	if(u){
		await db.disconnect()
		
		res.json({code:400,msg:'用户已存在'})
		return
	}
	
	
	let h = await Home.findOne({home_id:home_id})
	if(!h){
		await db.disconnect()
		
		res.json({code:400,msg:'家庭不存在'})
		return
	}
	
	let ms = h.get('members')
	if(!ms){
		ms = []
	}
	ms.push({phone:phone,name:name})
	h.set('members',ms)
	
	await h.save()
	u = new User({
		phone:phone,
		password:password,
		name:name,
		home_id:home_id
	})
	await u.save()
	
	await db.disconnect()
		
	return res.json({code:200,msg:'ok'})
	
	
}

router.route('/member/add')
	.post(function(req,res){
		member_add(req,res)
	})
	
// 4.3 /member/del
async function member_del(req,res){
	let home_id = req.body.home
	let phone = req.body.phone
	
	if(!home_id || !phone){
		res.json({code:400,msg:'家庭/成员不能为空'})
		return
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(User)
	db.register(Home)
		
	let u = await User.findOne({phone:phone})
	
	if(!u){
		await db.disconnect()
		
		res.json({code:400,msg:'无此用户'})
		return
	}
	
	let h = await Home.findOne({home_id:home_id})
	if(!h){
		await db.disconnect()
		
		res.json({code:400,msg:'无此家庭'})
		return
	}
	
	await u.remove()
	
	let ms = h.get('members')
	
	let index = ms.map(m=>{
		return m.phone === phone
	})
	
	if(index >= 0){
		ms.splice(index,1)
		h.set('members',ms)
		await h.save()
	}
	
	await db.disconnect()
		
	return res.json({code:200,msg:'ok'})
	
	
}

router.route('/member/del')
	.post(function(req,res){
		member_del(req,res)
	})

//5.1 /device/list
async function device_list(req,res){
	let id = req.body.home_id
	
	if(!id){
		return res.json({result:'error',message:'参数为空'})
	}
	
	const db = new Database('localhost/smartplug')
	
	await db.connect()
	
	db.register(Home)
	db.register(Device)
	
	let home = await Home.findOne({home_id:id})
	
	if(!home){
		await db.disconnection()
		return res.json({result:'error',message:'无此用户/家庭'})
	}
		
	let ds = home.get('devices')
	
	for(let i in ds){
		let state = 'offline'
		let data = 0
		
		
		let d = await Device.findOne({device_id:i.device_id})
		if(d){
			let t = moment().format('YYYYMMDD')
			
			state = d.get('state')
			data = d.get(data)
		}
		
		i.state = state
		i.data = data
	}
	
	await db.disconnect()
	return res.json({code:200,msg:'ok',data:ds})
	
}

router.route('/device/list')
	.post(function(req,res){
		deviceList(req,res)
	})
	
// 5.2 device add
async function device_add(req,res){
	let home_id = req.body.home_id
	let device_type = req.body.device_type
	let device_name = req.body.device_name
	let device_id = req.body.device_id
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Home)
	db.register(Device)
	
	let h = await Home.findOne({
		home_id:home_id,
	})

	if(!h){
		res.json({code:400,msg:'无此家庭'})
		return
	}
	
	let devices = h.get('devices')
	if(!devices){
		devices = []
	}
	
	let index = devices.findIndex(d=>{
		return d.device_id === device_id
	})
	
	if(index >= 0){
		devices[index].name = device_name
		devices[index].type = device_type
	} else {
		devices.push( {
			name:device_name,
			device_id:device_id,
			type:device_type
		})
	}
	
	h.set('devices',devices)
	
	await h.save()
	
	let d = await Device.findOne({device_id:device_id})
	
	if(!d){
		d = new Device({
			device_id:device_id,
			state:'online',
			data:0
		})	
	}
	
	await d.save()
	
	await db.disconnect()
	return res.json({code:200,msg:'ok'})	
	
}

router.route('/device/add')
	.post(function(req,res){
		device_add(req,res)
		
	})

// 5.3 device update
async function device_update(req,res){
	let home_id = req.body.home_id
	let device_type = req.body.device_type
	let device_name = req.body.device_name
	let device_id = req.body.device_id
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Home)
	
	let h = await Home.findOne({
		home_id:home_id,
	})

	if(!h){
		await db.disconnection()
		res.json({code:400,msg:'无此用户/家庭'})
		return
	}
	
	let devices = h.get('devices')
	
	let index = devices.findIndex(d=>{
		return d.device_id === device_id
	})
	
	if(index >= 0){
		devices[index].name = device_name
		devices[index].type = device_type
	} else {
		await db.disconnect()
		return res.json({code:400,msg:'无此设备'})	
		
	}
	
	h.set('devices',devices)
	
	await h.save()
	
	await db.disconnect()
	return res.json({code:200,msg:'ok'})	
	
}

router.route('/device/update')
	.post(function(req,res){
		device_update(req,res)
		
	})

// 5.4 /device/del
async function device_del(req,res){
	let home_id = req.body.home_id
	let device_id = req.body.device_id
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Home)
	
	let h = await Home.findOne({
		home_id:home_id,
	})

	if(!h){
		res.json({code:400,msg:'无此用户'})
		return
	}
	
	let devices = h.get('devices')
	
	let index = devices.findIndex(d=>{
		return d.device_id === device_id
	})
	
	if(index >= 0){
		devices.splice(index,1)
		h.set('devices',devices)
	
		await h.save()

	}
	
	await db.disconnect()
	return res.json({code:200,msg:'ok'})	
	
	
}

router.route('/device/del')
	.post(function(req,res){
		device_del(req,res)
		
	})

async function sendTaskToDevice(id,t,repeat,param){
	
	let cmd = 'switch'
	
	if(param === 'on' || param === 'off')
		cmd = 'switch'
	if(param === 'data')
		cmd = 'getMeter'
	else
		return
		
	let m = JSON.stringify({'cmd':cmd,'param':param,'t':t,'repeat':repeat})
	
	mqttClient.publish(id,m)

}

// 5.5 /device/switch
async function device_switch(req,res){
	let home_id = req.body.home_id
	let device_id = req.body.device_id
	let param = req.body.param
	
	if(!home_id || !device_id || !param || (param != 'on' && param != 'off')){
		return res.json({code:400,msg:'参数有误'})	
	}
	
	sendTaskToDevice(device_id,0,'0',param)
	
	res.json({code:200,msg:'ok'})
	
}
	
router.route('/device/switch')
	.post(function(req,res){
		device_switch(req,res)
	})


// 5.6 /device/meter
async function device_meter(req,res){
	let home_id = req.params.home_id
	let device_id = req.params.device_id
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Device)

	var d = await Device.findOne({device_id:id})
	if(!d){
		await db.disconnect()
		return res.json({code:400,msg:'无此设备'})
	}

	let w = d.get('data')
	
	await db.disconnect()
	
	if(w)
		d = w
	
	return res.json({code:200,msg:'ok',data:d})
	
}

router.route('/device/meter')
	.post(function(req,res){
		device_meter(req,res)			
	})

// 5.7 获取区间电量
async function device_meters(req,res){
	let home_id = req.body.home_id
	let device_id = req.body.device_id
	
	let start_day = moment(req.body.start_day)
	let end_day = moment(req.body.end_day)
	
	if(!home_id || !device_id || !start_day || !end_day){
		return res.json({code:400,msg:'参数有误'}) 
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Device)
	
	var d = await Device.find({device_id:id})
	
	if(!d)
		await db.disconnect()
		
		return res.json({
			code:400,msg:'无此设备'
		})
	

	let days = end_day.diff(start_day,'days') + 1
	
	let ds = []
	
	for(let i = 0;i < days;i++){
		let t = start_day.add(i,'days').format('YYYYMMDD')
		let d = d.get(t)
		if(d){
			ds.append({'day':t,'data':d})
		}
	}
	
	await db.disconnect()
	return res.json({code:200,msg:'ok',data:ds})	
	
}

router.route('/device/meters')
	.post(function(req,res){
		device_meters(req,res)			
	})


// 6.1 任务列表
async function task_list(req,res){
	let home_id = req.body.home_id

	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Home)
	
	let h = await Home.findOne({
		home_id:home_id,
	})
	
	if(!h){
		await db.disconnect()
		res.json({code:400,msg:'无此家庭'})
		return
	}
	
	let tasks = d.get('tasks')	
	
	
	tasks = tasks.filter(t=>{
		return (t.repeat === '1' || new Date(t.start * 1000) > Date.now()) 
	})
	
	
	await db.disconnect()
	
	return res.json({code:200,msg:'ok',tasks:tasks})
	
}

router.route('/task/list')
	.post(function(req,res){
		task_list(req,res)
		
	})


// 6.2 添加任务
async function task_add(req,res){
	let task_name = req.body.task_name
	let start = req.body.start
	let end = req.body.end
	let repeat = req.body.repeat
	let actions = req.body.actions
	
	let home_id = req.body.home_id
	
	if(!home_id || !task_name || !start || !actions || actions.length <= 0){
		return res.json({code:400,msg:'参数有误'})
	}
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Home)
	
	let h = await Home.findOne({
		home_id:home_id,
	})
	
	if(!h){
		await db.disconnect()
		res.json({code:400,msg:'无此家庭'})
		return
	}
	
	let tasks = h.get('tasks')	
	
	tasks.append({
		name:task_name,
		start:start,
		end:end,
		repeat:repeat,
		actions:actions
	})
	
	h.set('tasks',tasks)
	await h.save()

	await db.disconnect()
	
	for(let i in actions){
		a = actions[i]
		sendTaskToDevice(a.device_id,start,repeat,a.action)
	}
}

router.route('/task/add')
	.post(function(req,res){
		task_add(req,res)
		
	})

// 6.3 删除任务
async function task_del(req,res){
	let home_id = req.body.home_id
	let task_name = req.body.task_name
	
	let db = new Database('localhost/smartplug')
	await db.connect()
	
	db.register(Home)
	
	let h = await Device.findOne({
		home_id:home_id,
	})
	
	if(!h){
		await db.disconnect()
		res.json({code:400,msg:'无此家庭'})
		return
	}
	
	let tasks = d.get('tasks')	
	
	let index = tasks.findIndex(t=>{
		return t.name === task_name 
	})
	
	if(index >= 0){
		tasks.splice(index,1)
		d.set('tasks',tasks)
		await d.save()
		res.json({code:200,msg:'ok'})
	} else {
		res.json({code:400,msg:'无此任务'})
	}
	
	await db.disconnect()
	
	return 
	
}

router.route('/task/del')
	.post(function(req,res){
		task_del(req,res)
		
	})


app.use('/api/v1',router)

app.listen(port,function(){
	console.log('server is on port 3000')
})
