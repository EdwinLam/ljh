import { PHONE, PASSWORD, USER_INFO } from './Constants'
import StorageUtil from './StorageUtil'
export default class AuthUtil {
  static getUserInfo () {
    return StorageUtil.getStorage(USER_INFO)
  }
  static setUserInfo (userInfo) {
    return StorageUtil.setStorage(USER_INFO, userInfo)
  }
  static removeUserInfo () {
    return StorageUtil.removeStorage(USER_INFO)
  }
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
