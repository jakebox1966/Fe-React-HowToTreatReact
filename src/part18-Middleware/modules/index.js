/**
 * 루트 리듀서를 만들었던 것처럼 루트 사가를 만든다. => 추후 다른 리듀서에서도 사가를 만들어 등록하기 위함
 */

import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import loading from './loading'
import counter, { counterSaga } from './saga/counterWithSaga'
import sampleWithSaga, { sampleSaga } from './saga/sampleWithSaga'

const rootReducer = combineReducers({
    counter,
    sampleWithSaga,
    // sampleRefactoring,

    loading,
})

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐 주는 역할을 한다.
    yield all([counterSaga(), sampleSaga])
}

export default rootReducer
