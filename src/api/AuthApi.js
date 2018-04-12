import fetch from './fetch'

export default class AuthApi {
  static register ({phone, password, home_name, code}) {
    const data = {phone, password, home_name, code}
    return fetch.post('/usr/register', data)
  }
  static login ({phone, password}) {
    return new Promise(resolve => {
      resolve({code: 200,
        message: '登录成功',
        data: {
          islogin: true,
          phone: '13824789780',
          home_name: '测试',
          home_id: 1,
          devices: [{
            device_id: '123',
            type: '123',
            name: '123',
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
            name: '123',
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
            name: '123',
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
        }})
    })
    // const data = {phone, password}
    // return fetch.post('/usr/login', data)
  }
  static logout ({phone}) {
    const data = {phone}
    return fetch.post('/usr/logout', data)
  }
  static smsSend ({phone}) {
    const data = {phone}
    return fetch.post('/sms/send', data)
  }
  static validation ({phone, code}) {
    const data = {phone, code}
    return fetch.post('/sms/validation', data)
  }
}
