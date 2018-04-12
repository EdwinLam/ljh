import { PHONE, PASSWORD } from './Constants'
import StorageUtil from './StorageUtil'
export default class AuthUtil {
  static getPhone () {
    return StorageUtil.getStorage(PHONE)
  }
  static setPhone (phone) {
    return StorageUtil.setStorage(PHONE, phone)
  }
  static removePhone () {
    return StorageUtil.removeStorage(PHONE)
  }
  static getPassword () {
    return StorageUtil.getStorage(PASSWORD)
  }
  static setPassword (password) {
    return StorageUtil.setStorage(PASSWORD, password)
  }
  static removePassword () {
    return StorageUtil.removeStorage(PASSWORD)
  }
}
