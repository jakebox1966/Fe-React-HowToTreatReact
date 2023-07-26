/**
 *   redux-thunk
 * - Thunk는 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미한다.
 * - redux-thunk 라이브러리를 사용하면 thunk 함수를 만들어서 디스패치할 수 있다. 그러면 리덕스 미들웨어가 그 함수를 전달받아 store의 dispatch와 getState를 파라미터로 넣어서 호출해준다.
 *      Ex)
 *          const sampleThunk = () => (dispatch, getState) => {
 *              // 현재 상태를 참조할 수 있고,
 *              // 새 액션을 디스패치할 수도 있다.
 *          }
 * - store를 만들 때 redux-thunk를 적용한다.
 *
 *
 *
 * 1. Thunk 생성 함수 만들기
 * - redux-thunk는 액션 생성 함수에서 일반 액션 객체를 반환하는 대신에 함수를 반환한다.
 */

import { createAction, handleActions } from 'redux-actions'

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

export const increaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increase())
    }, 1000)
}

export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(decrease())
    }, 1000)
}

const initialState = 0 // 상태는 꼭 객체일 필요가 없다. 숫자 가능

const counter = handleActions(
    {
        [INCREASE]: (state) => state + 1,
        [DECREASE]: (state) => state - 1,
    },
    initialState,
)

export default counter
