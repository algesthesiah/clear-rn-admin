import watchLoGin from './users'
import businessAccount from './businessAccount'
export default function* rootSaga() {
  yield [
    watchLoGin(),
    businessAccount(),
  ]
}