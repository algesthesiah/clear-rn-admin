import axios from 'axios'
import qs from 'querystring'
import baseConfig from './httpBaseConfig.js'
import { Toast } from 'native-base'
var data
const http = axios.create({
  baseURL: baseConfig.baseUrl,
  timeout: 300000
})
// // axios拦截器
storage.get('token').then(token => {
  http.interceptors.request.use(
    config => {
      console.log(config)
      data = config.data || {}
      for (var k in data) {
        if (
          data[k] + '' === 'null' ||
          data[k] + '' === 'undefined' ||
          data[k] + '' === ''
        ) {
          delete data[k]
        }
      }
      if (token) {
        config.headers.Authorization = 'Bearer ' + token
      }
      if (config.method === 'post') {
        // 序列化
        config.data = qs.stringify(data) // ***** 这里转义
      }
      return config
    },
    error => {
      // 返回错误统一处理, vuex内无需另行处理，比如自身网络错误等
      Toast.show({
        text: '网络已断开，请检查网络!',
        type: 'danger'
      })
      return Promise.reject(error)
    }
  )
})

http.interceptors.response.use(
  res => {
    if (res.status === 200) {
      if (res.data.error) {
        if (res.data.error.code === 401) {
          Storage.clearMap()
        } else if (res.data.error.code === 422) {
          let v = res.data.error.errors
          let s = Object.values(v)
          let str = ''
          s.forEach(item => {
            str = str + item[0] + ' '
          })
          console.log(str)
          Toast.show({
            text: '参数填写有误!' + str,
            type: 'warning'
          })
        } else if (res.data.error.code === 403) {
          /*iView.Message.warning('没有权限')*/
          Toast.show({
            text: '您没有权限!' + res.data.error.message,
            type: 'warning'
          })
          /* router.push({name:'Login'})*/
        } else if (res.data.error.code == 20001) {
          Toast.show({
            text: '用户不存在!',
            type: 'warning'
          })
        } else {
          Toast.show({
            text: res.data.error.message,
            type: 'warning'
          })
        }
      }
      /*//分路径处理
    if(res.data.config.url===_global.baseUrl+'/passport/login'){

    }*/
    } else {
    }
    return res
  },
  error => {
    // 返回错误统一处理, vuex内无需另行处理，比如自身网络错误等
    if (navigator.onLine) {
      Toast.show({
        text: '网络错误，稍后再试',
        type: 'warning'
      })
    } else {
      Toast.show({
        text: '网络已断开，请检查网络',
        type: 'warning'
      })
    }
    return Promise.reject(error)
  }
)
export default http
