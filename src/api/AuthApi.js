import fetch from './fetch'
import qs from 'qs'
export default class AuthApi {
  static register ({phone, password, home_name, usr_name, code}) {
    const data = {phone, password, home_name, usr_name, code}
    return fetch.post('/api/v1/usr/register', qs.stringify(data))
  }
  static login ({phone, password}) {
    // return new Promise(resolve => {
    //   resolve({code: 200,
    //     message: '登录成功',
    //     data: {
    //       islogin: true,
    //       phone: '13824789780',
    //       home_name: '测试',
    //       home_id: 1,
    //       devices: [{
    //         device_id: '123',
    //         type: '123',
    //         name: '123',
    //         state: 'on',
    //         data: 100,
    //         tasks: {
    //           start: '10:12',
    //           end: '10:11',
    //           repeat: '1',
    //           action: 'on'
    //         }
    //       },
    //       {
    //         device_id: '123',
    //         type: '123',
    //         name: '123',
    //         state: 'on',
    //         data: 100,
    //         tasks: {
    //           start: '10:12',
    //           end: '10:11',
    //           repeat: '1',
    //           action: 'on'
    //         }
    //       },
    //       {
    //         device_id: '123',
    //         type: '123',
    //         name: '123',
    //         state: 'on',
    //         data: 100,
    //         tasks: {
    //           start: '10:12',
    //           end: '10:11',
    //           repeat: '1',
    //           action: 'on'
    //         }
    //       }
    //       ]
    //     }})
    // })
    const data = {phone, password}
    return fetch.post('/api/v1/usr/login', qs.stringify(data))
  }
  static logout ({phone}) {
    const data = {phone}
    return fetch.post('/api/v1/usr/logout', qs.stringify(data))
  }
  static smsSend ({phone}) {
    const data = {phone}
    return fetch.post('/api/v1/sms/send',  qs.stringify(data))
  }
  static validation ({phone, code}) {
    const data = {phone, code}
    return fetch.post('/api/v1/sms/validation', qs.stringify(data))
  }
}
