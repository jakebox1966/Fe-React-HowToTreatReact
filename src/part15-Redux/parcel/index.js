import {legacy_createStore as createStore} from 'redux'

/**
 * 1. DOM 레퍼런스 만들기
 *
 */

const divToggle = document.querySelector('.toggle')
const counter = document.querySelector('h1')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')

/**
 * 2. 액션 타입과 액션 생성 함수 정의
 * - 프로젝트의 상태 변화를 일이키는 것을 액션 이라고 한다.
 * - 주로 액션 이름은 문자열 대문자 형태이고 고유하게 작성해야한다.
 *
 */
const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

/**
 * 위에 작성한 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성한다.
 * 액션 객체는 반드시 type 값을 가지고 있어야 하며, 그 외에 추후 상태를 업데이트할 때
 * 참고하고 싶은 값은 마음대로 넣을 수 있다.
 *
 */
const toggleSwitch = () => ({ type: TOGGLE_SWITCH })
const increase = (difference) => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE })

/**
 * 3. 초깃값 설정
 * - 초깃값을 정의해 준다. 초깃값의 형태는 자유이다. 숫자, 문자열, 객체일 수도 있다.
 */

const initialState = {
    toggle: false,
    counter: 0,
}

/**
 * 4. 리듀서 함수 정의
 * - 리듀서는 변화를 일으키는 함수이다. 함수의 파라미터로는 state와 action 값을 받아온다.
 */

// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지를 해 주어야 한다.
                toggle: !state.toggle,
            }
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference,
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            }
        default:
            return state
    }
}

/**
 * 5. 스토어 만들기
 *  - 스토어를 만들 때는 createStore 함수를 사용한다. => Deprecated 됨
 *  - createStore 함수의 파라미터에는 리듀서 함수를 넣어 주어야 한다.
 *
 */
const store = createStore(reducer)

/**
 * 6. render 함수 만들기
 * - 아래의 함수는 상태가 업데이트될 때마다 호출되며, 리액트의 render 함수와는 다르게
 * - 이미 html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경한다.
 */

const render = () => {
    const state = store.getState() // 현재 상태를 불러온다.
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active')
    } else {
        divToggle.classList.remove('active')
    }

    // 카운터 처리
    counter.innerText = state.counter
}

render()

/**
 * 7. 구독하기
 * - 스토어의 내장함수 subscribe를 사용하여
 *   스토어의 상태가 바뀔 때마다 방금 만든 render 함수가 호출되도록 한다.
 *
 * - subscribe 함수의 파라미터로는 함수 형태의 값을 전달해 준다.
 *   전달된 함수는 추후 액션이 발생하여 상태가 업데이트될 때마다 호출된다.
 *
 * - 리액트 프로젝트에서 리덕스를 사용할 때는 react-redux라는 라이브러리가
 *   컴포넌트에서 리액트 상태를 조회하는 과정에서 이 작업을 대신 해준다. => 직접사용안함
 */

store.subscribe(render)

/**
 * 8. 액션 발생시키
 * - 액션을 발생시키는 것을 디스패치라고 한다. => 스토어 내장함수 dispatch사용, 파라미터는 액션 객체
 *
 */

divToggle.addEventListener('click', () => store.dispatch(toggleSwitch()))
btnIncrease.addEventListener('click', () => store.dispatch(increase(1)))
btnDecrease.addEventListener('click', () => store.dispatch(decrease()))
