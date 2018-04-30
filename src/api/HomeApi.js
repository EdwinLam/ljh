import fetch from './fetch'
import qs from 'qs'
export default class HomeApi {
  static update ({home_id, name}) {
    const data = {home_id, name}
    return fetch.post('/api/v1/home/update', qs.stringify(data))
  }
}
