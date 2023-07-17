/**
 * 1. 액션 타입 정의하기
 * - 대문자로 정의
 * - 모듈 이름/액션 이름 과 같은 형태로 작성
 *
 * 2. 액션 생성 함수 만들기
 * - export 키워드 붙이기 => 다른 파일에서 불러와 사용 가능
 *
 * 3. 초기 상태 및 리듀서 함수 만들기
 * - 현재 상태를 참조하여 새로운 객체를 생성해서 반환하는 코드 작성
 * - export default 키워드 사용하여 함수 내보내기
 *
 *
 * *** export 와 export default의 차이점
 * - export는 여러 개를 내보낼 수 있지만 export default는 단 한개만 내보낼 수 있다
 *      Ex)
 *              import counter from './counter'
 *              import {increase, decrease} from './counter'
 *              // 한꺼번에 불러올 때
 *              import counter, { increase, decrease } from './counter'
 */

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

const initialState = {
    number: 0,
}

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1,
            }
        case DECREASE:
            return {
                number: state.number - 1,
            }
        default:
            return state
    }
}

export default counter
