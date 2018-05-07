import fetch from './fetch'
import qs from 'qs'

export default class AuthApi {
  static list ({home_id}) {
    const data = {home_id}
    return fetch.post('/api/v1/device/list', qs.stringify(data))
  }
  static add ({ home_id, device_id, device_name, device_type }) {
    const data = ({home_id, device_id, device_name, device_type})
    return fetch.post('/api/v1/device/add', qs.stringify(data))
  }
  static del ({home_id, device_id}) {
    const data = { home_id, device_id }
    return fetch.post('/api/v1/device/del', qs.stringify(data))
  }
  static switch ({home_id, device_id, param}) {
    const data = {home_id, device_id, param}
    return fetch.post('/api/v1/device/switch', qs.stringify(data))
  }
  static meter ({home_id, device_id}) {
    const data = {home_id, device_id}
    return fetch.post('/api/v1/device/meter', qs.stringify(data))
  }
  static meters ({home_id, device_id, start_day, end_day}) {
    const data = {home_id, device_id, start_day, end_day}
    return fetch.post('/api/v1/device/meters', qs.stringify(data))
  }
  static taskList ({home_id}) {
    const data = {home_id}
    return fetch.post('/api/v1/task/list', qs.stringify(data))
  }
  static addTask ({home_id, task_name, start, end, repeat, actions}) {
    const data = {home_id, task_name, start, end, repeat, actions}
    return fetch.post('/api/v1/task/add', qs.stringify(data))
  }
  static delTask ({home_id, task_name}) {
    const data = {home_id, task_name}
    return fetch.post('/api/v1/task/del', qs.stringify(data))
  }
}
