/**
 * 요청의 로딩 상태를 관리하는 작업 개선
 * - 기존에는 리듀서 내부에서 각 요청에 관련된 액션이 디스패치될 때마다 로딩 상태를 변경했지만 이 작업을
 * 로딩 상태만 관리하는 리덕스 모듈을 따로 생성하여 처리
 *
 * - loading 리덕스 모듈에서 만든 액션 생성 함수는 앞에서 만든 createRequestThunk에서 사용한다.
 *
 */
import { createAction, handleActions } from 'redux-actions'

const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

/*
    요청을 위한 액션 타입을 payload로 설정(Ex: 'sample/GET_POST')
 */

export const startLoading = createAction(START_LOADING, (requestType) => requestType)

export const finishLoading = createAction(FINISH_LOADING, (requestType) => requestType)

const initialState = {}

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
    initialState,
)

export default loading
