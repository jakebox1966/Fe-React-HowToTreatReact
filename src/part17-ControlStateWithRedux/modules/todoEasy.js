import { createAction, handleActions } from 'redux-actions'

const CHANGE_INPUT = 'todos/CHANGE_INPUT' // 인풋 값을 변경함
const INSERT = 'todos/INSERT' // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE' // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE' // todo를 제거함

/**
 * - 이 전의 counter 액션생성함수와 다른 점으로 함수에서 파라미터를 필요로 한다. createAction으로 액션을 만들면 액션에 필요한 추가 데이터는
 * payload라는 이름을 사용한다.
 *
 *      Ex)
 *              const MY_ACTION = 'sample/MY_ACTION'
 *              const myAction = createAction(MY_ACTION)
 *              const action = myAction('hello world')
 *
 *              결과:
 *                  { type: MY_ACTION, payload: 'hello world' }
 *
 *
 *              액션 생성 함수에서 받아 온 파라미터에 변형을 주어서 넣고 싶다면 createAction의 두 번째 함수에 payload를 정의하는 함수를 따로 선언해서 넣어주면 된다.
 *              const MY_ACTION = 'sample/MY_ACTION'
 *              const myAction = createAction(MY_ACTION, text => `${text}!`
 *              const action = myAction('hello world)
 *
 *              결과:
 *                  { type: MY_ACTION, payload: 'hello world!}
 *
 */
export const changeInput = createAction(CHANGE_INPUT, (input) => input)

let id = 3 // insert가 호출될 때마다 1씩 더해진다.

// insert의 경우 todo 객체를 액션 객체 안에 넣어 주어야 하기 때문에 두 번째 파라미터에 text를 넣으면 todo 객체가 반환되는 함수를 넣어 준다.
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}))

export const toggle = createAction(TOGGLE, (id) => id)

export const remove = createAction(REMOVE, (id) => id)

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false,
        },
    ],
}

/**
 * createAction으로 만든 액션 생성 함수는 파라미터로 받아 온 값을 객체 안에 넣을 때 원하는 이름으로 넣는 것이 아니라 action.id, action.todo 와 같이
 * action.payload라는 이름을 공통적으로 넣어 주게 된다. 액션 생성 함수는 액션에 필요한 추가 데이터를 모두 payload라는 이름으로 사용하기 때문에
 * action.id, action.todo를 조회하는 대신, 모두 공통적으로 action.payload 값을 조회하도록 리듀서를 구현해 주어야 한다.
 * => action 값의 payload이름을 객체 비구조화 할당 문법으로 새로 설정
 *
 */
// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input,
//             }
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo),
//             }
//
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//                 ),
//             }
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.id),
//             }
//         default:
//             return state
//     }
// }

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
        [INSERT]: (state, action) => ({
            ...state,
            todos: state.todos.concat(action.payload),
        }),
        [TOGGLE]: (state, action) => ({
            ...state,
            todos: state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
            ),
        }),
        [REMOVE]: (state, action) => ({
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
        }),
    },
    initialState,
)

export default todos
