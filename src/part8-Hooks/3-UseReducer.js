/**
 * useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook이다. => 리덕스 관련
 * - 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수이다.
 * - 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 한다.
 *
 * Ex)  리듀서 함수 예제
 *      function reducer(state, action) {
 *          return {...} // 불변성을 지키면서 업데이트한 새로운 상태를 반환한다.
 *      }
 *
 *      액션 값 예제
 *      {
 *          type: 'INCREAMENT',
 *          // 다른 값들이 필요하다면 추가로 들어감
 *      }
 *
 * - useReducer의 첫 번째 파라미터에는 리듀서 함수를 넣고, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어 준다. 이 Hook을 사용하면
 *   state 값과 dispatch 함수를 반환하는데 여기서 state는 현재 가리키고 있는 상태이고, dispatch는 액션을 발생시키는 함수이다.
 *
 * - useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것이다. 또한 여러 개의 input 사용 시
 *   useState를 여러 번 사용했는데 useReducer를 사용하면 기존의 클래스형 컴포넌트에서 input 태그에 name 값을 할당하고 e.target.name 값을
 *   참조하여 setState를 해 준 것과 유사한 방식으로 처리 가능하다.
 *
 */

import React, {useReducer} from 'react' // function reducer(state, action) {

// function reducer(state, action) {
//     //action.type에 따라 다른 작업 수행
//     switch (action.type) {
//         case 'INCREMENT':
//             return { value: state.value + 1 }
//         case 'DECREMENT':
//             return { value: state.value - 1 }
//         default:
//             //  아무것도 해당되지 않을 때 기존 상태 반환
//             return state
//     }
// }
//
// const UseReducer = () => {
//     const [state, dispatch] = useReducer(reducer, { value: 0 })
//     return (
//         <div>
//             <p>
//                 현재 카운터 값은 <b>{state.value}</b> 입니다.
//             </p>
//             <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
//             <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
//         </div>
//     )
// }

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    })
    const { name, nickname } = state
    const onChange = (e) => {
        dispatch(e.target)
    }

    return (
        <div>
            <div>
                <input type="text" name="name" value={name} onChange={onChange} />
                <input type="text" name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default UseReducer
