import {createAction, handleActions} from 'redux-actions'
import {takeLatest} from 'redux-saga/effects'
import * as api from '../../api/api'
import createRequestSaga from '../../lib/createRequestSaga' // 액션 타입을 선언한다.

// 액션 타입을 선언한다.
// 한 요청당 세 개를 만들어야 한다.
const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'

export const getPost = createAction(GET_POST, (id) => id)
export const getUsers = createAction(GET_USERS)

/**
 * redux-saga를 사용할 때는 id처럼 요청에 필요한 값을 액션의 payload로 넣어 주어야 한다.
 *      Ex)
 *          {
 *              type: 'sample/GET_POST,
 *              payload: 1
 *          }
 * 위 예시의 액션을 처리하기 위한 사가를 작성할 때 payload 값을 API를 호출하는 함수의 인수로 넣어 주어야 한다.
 * API를 호출해야 하는 상황에는 사가 내부에서 직접 호출하지 않고 call 함수를 사용한다.
 * call 함수의 경우, 첫 번째 인수는 호출하는 함수, 그 뒤에 오는 인수들은 해당 함수에 넣어 주고 싶은 인수이다. => 파라미터
 *
 */

const getPostSaga = createRequestSaga(GET_POST, api.getPost())
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers())

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga())
    yield takeLatest(GET_USERS, getUsersSaga())
}

// 초기 상태를 선언한다.
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리한다.
const initialState = {
    post: null,
    users: null,
}

const sampleWithSagaRefactoring = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload,
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload,
        }),
    },
    initialState,
)

export default sampleWithSagaRefactoring
