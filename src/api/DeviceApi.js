import fetch from './fetch'
import qs from 'qs'

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
          tasks: [{
            start: '10:12',
            end: '10:11',
            repeat: '1',
            action: 'on'
          }]
        }, {
          device_id: '123',
          type: '123',
          name: '插座B',
          state: 'on',
          data: 100,
          tasks: [{
            start: '10:12',
            end: '10:11',
            repeat: '1',
            action: 'on'
          }]
        },
          {
            device_id: '123',
            type: '123',
            name: '插座C',
            state: 'on',
            data: 100,
            tasks: [{
              start: '10:12',
              end: '10:11',
              repeat: '1',
              action: 'on'
            }]
          }
        ]
      })
    })
    // const data = {home_id}
    // return fetch.post('/api/v1/device/list', qs.stringify(data))
  }
  static add ({ home_id, device_id, device_name, device_type }) {
    const data = ({home_id, device_id, device_name, device_type})
    return fetch.post('/api/v1/device/add', qs.stringify(data))
  }
  static del ({home_id, device_id}) {
    const data = { home_id, device_id }
    return fetch.post('/api/v1/device/delete', qs.stringify(data))
  }
  static switch ({home_id, device_id, param}) {
    const data = {home_id, device_id, param}
    return fetch.post('/api/v1/device/switch', qs.stringify(data))
  }
  static meter ({home_id, device_id}) {
    const data = {home_id, device_id}
    return fetch.get('/api/v1/device/device/meters', qs.stringify(data))
  }
  static meters ({home_id, device_id, start_day, end_day}) {
    const data = {home_id, device_id, start_day, end_day}
    return fetch.get('/api/v1/device/meters', qs.stringify(data))
  }
  static taskList ({home_id, device_id}) {
    const data = {home_id, device_id}
    return fetch.get('/api/v1/device/task/list', qs.stringify(data))
  }
  static addTask ({home_id, device_id, start, end, repeat, action}) {
    const data = {home_id, device_id, start, end, repeat, action}
    return fetch.post('/api/v1/device/task/list', qs.stringify(data))
  }
  static delTask ({home_id, device_id, start, end, repeat}) {
    const data = {home_id, device_id, start, end, repeat}
    return fetch.post('/api/v1/device/task/del', qs.stringify(data))
  }
}
