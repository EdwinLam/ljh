import fetch from './fetch'
import qs from 'qs'

export default class AuthApi {
  static list ({ home_id }) {
    const data = ({home_id})
    return fetch.post('/api/v1/member/list', qs.stringify(data))
  }
  static add ({ home_id, phone, name, password }) {
    const data = ({home_id, phone, name, password})
    return fetch.post('/api/v1/member/add', qs.stringify(data))
  }
  static del ({home_id, phone}) {
    const data = { home: home_id, phone }
    return fetch.post('/api/v1/member/del', qs.stringify(data))
  }
}
