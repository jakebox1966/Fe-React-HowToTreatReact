/**
 * 4. 루트 리듀서 만들기
 * - createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야한다. 그렇기 때문에 기존에 만들었던 리듀서를 하나로 합쳐 주어야 하는데
 *   이 작업은 리덕스에서 제공하는 combineReducers 라는 함수를 사용하면 쉽게 처리할 수 있다.
 * - 파일 이름을 notify.js 로 설정하면 나중에 불러올 때 디렉터리 이름까지만 입력하여 불러올 수 있다.
 *  Ex)
 *      import rootReducer from './modules'
 *
 *
 */

import { combineReducers } from 'redux'
import counter from './counterEasy'
import todos from './todoEasy'

const rootReducer = combineReducers({
    counter,
    todos,
})

export default rootReducer
