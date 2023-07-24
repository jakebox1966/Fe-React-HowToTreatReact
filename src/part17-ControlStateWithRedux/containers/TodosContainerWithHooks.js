/**
 * 컨테이너 컴포넌트를 만들 때 connect 함수를 사용해도 좋고, useSelector와 useDispatch를 사용해도
 * 상관 없다. 하지만 Hooks를 사용하여 컨테이너 컴포넌트를 만들 때 잘 알아 두어야 할 차이점이 있다.
 * connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우, 해당 컨테이너 컴포넌트의 부모 컴포넌트가
 * 리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화된다.
 * 반면 useSelector를 사용하여 리덕스 상태를 조회했을 때는 이 최적화 작업이 자동으로 이루어지지 않으므로, 성능 최적화를 위해서는
 * React.memo를 컨테이너 컴포넌트에 사용해 주어야 한다.
 *
 */

import React from 'react'
import { useSelector } from 'react-redux'
import { changeInput, insert, remove, toggle } from '../modules/todoEasy'
import Todos from '../components/Todos'
import useActions from '../lib/useActions'

const TodosContainerWithHooks = () => {
    /**
     * useSelector를 사용할 때 비구조화 할당 문법 사용
     */
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }))
    // useActions 사용하여 주석처리
    // const dispatch = useDispatch()
    // const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch])
    // const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch])
    // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch])
    // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch])

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        [],
    )

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
}

export default React.memo(TodosContainerWithHooks)
