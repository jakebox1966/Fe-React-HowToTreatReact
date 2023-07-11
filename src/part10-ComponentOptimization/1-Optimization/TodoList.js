import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

// App Component에서 전달된 props 를 TodoItem으로 변환하여 렌더링
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {/*
      - props로 받아 온 todos 배열을 배열 내장 함수 map을 통해
        TodoListItem으로 이루어진 배열로 변환하여 렌더링
      - todo데이터는 통째로 props로 전달 => 성능 최적화 편리
      */}
            {todos.map((todo) => (
                <TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id} />
            ))}
        </div>
    )
}

// App 컴포넌트에 다른 state가 추가되어 해당 값 들이 업데이트될 때는 TodoList 컴포넌트가 불필요한 리렌더링을 할 수 있기 때문에 미리 최적화
export default React.memo(TodoList)
