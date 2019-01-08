import { createStore, applyMiddleware } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, persistCombineReducers } from 'redux-persist'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga' // 引入redux-saga中的createSagaMiddleware函数
import rootSaga from './sagas'
// 持久化存储配置
const config = {
  key: 'root',
  storage: AsyncStorage
}

const persistReducers = persistCombineReducers(config, {
  reducers
})

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware() // 执行
  const store = createStore(persistReducers, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  const persistor = persistStore(store)
  return { persistor, store }
}

export default configureStore
