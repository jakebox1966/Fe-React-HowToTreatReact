import {createAction, handleActions} from 'redux-actions'

/**
 * - redux-actions 라이브러리와 immer 라이브러리를 활용하면 리덕스를 훨씬 편하게 사용할 수 있다.
 * - 리듀서를 작성할 때 switch/case 문이 아닌 handleActions 라는 함수를 사용하여 각 액션마다 업데이트 함수를 설정하는 형식으로 작성할 수 있다.
 *
 *
 */
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

/**
 * - createAction을 사용하면 매번 객체를 직접 만들어 줄 필요 없이 간단하게 액션 생성 함수를 선언할 수 있다.
 */
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)
const initialState = {
    number: 0,
}

/**
 *  - handleActions 함수의 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수를 넣어 주고, 두 번째 파라미터에는 초기 상태를 넣어 준다.
 *
 */
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
)

export default counter
