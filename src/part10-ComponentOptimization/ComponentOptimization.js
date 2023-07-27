/**
 *
 *
 * React DevTools => Profiler : 성능 분석 도구
 *
 * Component re-rendering 발생 요인
 * - 자신이 전달받은 props가 변경될 때
 * - 자신의 state가 바뀔 때
 * - 부모 컴포넌트가 리렌더링될 때
 * - forceUpdate 함수가 실행될 때
 *
 * 컴포넌트 최적화 방법
 *
 * 1. 컴포넌트의 props가 바뀌지 않았다면 리렌더링 하지 않도록 방지
 *      - Class Component에서는 shouldComponentUpdate라는 라이프사이클을 사용
 *      - function Component에서는 React.memo 함수 사용 : 컴포넌트의 props가 바뀌지 않았다면 리렌더링하지 않도록 설정
 *
 * 2. 함수가 새롭게 생성되지 않도록 방지
 *      - useState의 함수형 업데이트 기능 사용
 *          Ex) 기존에는 setter 함수 사용시 새로운 상태를 바로 파라미터에 넣어주었는데 대신, 상태 업데이트를 어떻게 할지 정의해 주는 함수를 넣어줄 수 있다. => 함수형 업데이트
 *              따라서 useCallback을 사용할 때 두 번째 파라미터로 넣는 배열에 number를 넣지 않아도 된다.
 *
 *              const [number, setNumber] = useState(0)
 *              // 여기서 prevNumbers는 현재 number 값을 가리킨다.
 *              const onIncrease = useCallback(() => setNumber(prevNumber => prevNumber + 1),
 *              [],
 *              )
 *
 *
 *      - useReducer 사용 : useReducer를 사용할 때는 원래 두 번째 파라미터에 초기 상태를 넣어주지만 두 번째 파라미터에 undefined를 넣고, 세 번째 파라미터에 초기 상태를
 *                         만들어 주는 함수를 넣으면 컴포넌트가 맨 처음 렌더링될 때만 state초기화 함수가 실행된다. => 상태를 업데이트하는 로직을 모아서 컴포넌트 바깥에 둘 수 있다.
 *
 * 3. 리스트 관련 컴포넌트를 작성할 때는 리스트 아이템과 리스트, 이 두가지 컴포넌트를 최적화해 주어야 한다.
 */

import './ComponentOptimization.css'
import TodoTemplate from './1-Optimization/TodoTemplate'
import TodoInsert from './1-Optimization/TodoInsert'
import TodoList from './1-Optimization/TodoList'
import { useCallback, useReducer, useRef } from 'react'

function createBulkTodos() {
    console.log('실행')
    const array = []
    for (let i = 0; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        })
    }
    return array
}

// useReducer 사용하여 렌더링 최적화
function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT': // 새로 추가
            // { type: 'INSERT', todo: {id: 1, text: 'todo', checked: false} }
            return todos.concat(action.todo)
        case 'REMOVE': // 제거
            // { type: 'REMOVE', id: 1 }
            return todos.filter((todo) => todo.id !== action.id)
        case 'TOGGLE': // 토글(checkBox Control)
            // { type: 'TOGGLE', id: 1 }
            return todos.map((todo) =>
                todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
            )
    }
}

function App() {
    // useState를 사용 => todos 상태 정의 => todos를 TodoList의 props로 전달
    // const [todos, setTodos] = useState(createBulkTodos)
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)

    // - useRef를 사용하여 id 값 관리 => 단순참조 되는 값 (리렌더링 필요X)
    const nextId = useRef(2501)

    // - onInsert 함수 작성(useCallback 사용 : props로 전달해야 할 함수를 만들때는 useCallback 사용 추천)
    // - 함수형 업데이트 사용하여 useCallback 함수 두번째 파라미터 빈배열로 설정
    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        }
        // setTodos((todos) => todos.concat(todo))
        dispatch({type: 'INSERT', todo})
        nextId.current += 1 // nextId 1씩 더하기
    }, [])

    // - filter 함수 사용하여 onRemove 함수 작성(useCallback 사용)
    // - 함수형 업데이트 사용하여 useCallback 함수 두번째 파라미터 빈배열로 설정
    const onRemove = useCallback((id) => {
        // setTodos((todos) => todos.filter((todo) => todo.id !== id))
        dispatch({type: 'REMOVE', id})
    }, [])

    // - 수정 기능(checkBox control) => map 사용하여 불변성 유지하면서 특정 배열 원소 업데이트(useCallback 사용)
    // - 함수형 업데이트 사용하여 useCallback 함수 두번째 파라미터 빈배열로 설정
    const onToggle = useCallback((id) => {
        // setTodos((todos) =>
        //     todos.map((todo) =>
        //         todo.id === id
        //             ? {
        //                   ...todo,
        //                   checked: !todo.checked,
        //               }
        //             : todo,
        //     ),
        // )
        dispatch({type: 'TOGGLE', id})
    }, [])
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    )
}

export default App
