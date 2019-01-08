import axios from 'axios'
import qs from 'querystring'
import baseConfig from './httpBaseConfig.js'
import Cookies from 'react-native-cookies'
// CookieManager.setFromResponse(
//   'http://example.com',
//   'user_session=abcdefg; path=/; expires=Thu, 1 Jan 2030 00:00:00 -0000; secure; HttpOnly')
//   .then((res) => {
//     // `res` will be true or false depending on success.
//     console.log('CookieManager.setFromResponse =>', res);
//   });

// Get cookies as a request header string
// CookieManager.get('http://example.com')
//   .then((res) => {
//     console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
//   });

const http = axios.create({
  baseURL: baseConfig.baseUrl,
  timeout: 300000
})
// // axios拦截器
http.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    iView.LoadingBar.finish()
    iView.LoadingBar.start()
    Store.dispatch('common/showLoading', true)
    // 若是有做鉴权token , 就给头部带上token
    if (Cookies.get('token')) {
      config.headers.Authorization = 'Bearer ' + Cookies.get('token')
      //console.log('我带了token了')
    }
    if (config.method === 'post') {
      // 序列化
      // config.data = qs.stringify(config.data); // ***** 这里转义
    }
    return config
  },
  error => {
    // 返回错误统一处理, vuex内无需另行处理，比如自身网络错误等
    iView.LoadingBar.error()
    Store.dispatch('common/showLoading', false)
    iView.Message.warning('网络已断开，请检查网络')
    return Promise.reject(error)
  }
)

