import fetch from './fetch'

export default class AuthApi {
  static list ({home_id}) {
    return new Promise(resolve => {
      resolve({
        code: 200,
        message: '登录成功',
        devices: [{
          device_id: '123',
          type: '123',
          name: '插座A',
          state: 'offline',
          data: 100,
          tasks: {
            start: '10:12',
            end: '10:11',
            repeat: '1',
            action: 'on'
          }
        }, {
          device_id: '123',
          type: '123',
          name: '插座B',
          state: 'on',
          data: 100,
          tasks: {
            start: '10:12',
            end: '10:11',
            repeat: '1',
            action: 'on'
          }
        },
        {
          device_id: '123',
          type: '123',
          name: '插座C',
          state: 'on',
          data: 100,
          tasks: {
            start: '10:12',
            end: '10:11',
            repeat: '1',
            action: 'on'
          }
        }
        ]
      })
    })
    // const params = {phone, password, home_name, code}
    // return fetch.get('/device/list', params)
  }
  static add ({ home_id, device_id, device_name, device_type }) {
    const data = ({home_id, device_id, device_name, device_type})
    return fetch.post('/device/add', data)
  }
  static del ({home_id, device_id}) {
    const data = { home_id, device_id }
    return fetch.post('/device/delete', data)
  }
  static switch ({home_id, device_id, param}) {
    return new Promise(resolve => {
      resolve({
        code: 200,
        message: '登录成功',
        data: 50
      })
    })
    // const data = {home_id, device_id, param}
    // return fetch.post('/device/switch', data)
  }
  static meter ({home_id, device_id}) {
    return new Promise(resolve => {
      resolve({
        code: 200,
        message: '登录成功',
        data: 50
      })
    })
    // const params = {home_id, device_id}
    // return fetch.get('/device/meters', params)
  }
  static meters ({home_id, device_id, start_day, end_day}) {
    const params = {home_id, device_id, start_day, end_day}
    return fetch.get('/device/meters', params)
  }
  static taskList ({home_id, device_id}) {
    const params = {home_id, device_id}
    return fetch.get('/device/task/list', params)
  }
  static addTask ({home_id, device_id, start, end}) {
    const data = {home_id, device_id, start, end}
    return fetch.post('/device/task/list', data)
  }
  static delTask ({home_id, device_id, start, end, repeat}) {
    const data = {home_id, device_id, start, end, repeat}
    return fetch.post('/device/task/del', data)
  }
}
