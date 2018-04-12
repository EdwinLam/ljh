import Cookies from 'js-cookie'
import { PHONE, PASSWORD } from './Constants'

export default class AuthUtil {
  static getPhone () {
    return Cookies.get(PHONE)
  }
  static setPhone (phone) {
    return Cookies.set(PHONE, phone)
  }
  static removePhone () {
    return Cookies.remove(PHONE)
  }
  static getPassword () {
    return Cookies.get(PASSWORD)
  }
  static setPassword (password) {
    return Cookies.set(PASSWORD, password)
  }
  static removePassword () {
    return Cookies.remove(PASSWORD)
  }
}
