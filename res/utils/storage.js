'use strict'
import { AsyncStorage } from 'react-native'
class Storage {
  get(key) {
    return AsyncStorage.getItem(key)
      .then(value => {
        if (value && value != '') {
          const jsonValue = JSON.parse(value)
          return jsonValue
        } else {
          return null
        }
      })
      .catch(() => {
        return null
      })
  }
  set(key, value) {
    return this.get(key).then(item => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value)
      return AsyncStorage.setItem(key, JSON.stringify(value))
    })
  }
  delete(key) {
    return AsyncStorage.removeItem(key)
  }
  clear() {
    return AsyncStorage.clear()
  }
}
const storage = new Storage()
global.storage = storage

export default storage
