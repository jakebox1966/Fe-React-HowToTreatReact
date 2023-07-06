/**
 * 불변성을 유지 시키면서 업데이트를 할 수 있는 배열 내장함수로 filter가 있다.
 * filter 함수를 사용하면 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류할 수 있다.
 * filter 함수의 인자에 분류하고 싶은 조건을 반환하는 함수를 넣어준다.
 * Ex)
 *      const numbers = [1,2,3,4,5,6]
 *      const biggerThanThree = numbers.filter(number => number > 3)
 *      result => [4,5,6]
 *
 */

import React, { useState } from 'react'

const Filter = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ])
    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(5) //=> 새로운 항목을 추가할 때 사용할 id

    const onChange = (e) => setInputText(e.target.value)
    const onClick = () => {
        // 배열 새 항목을 추가할 때 push가 아니라 concat을 사용함
        // push는 기존 배열 자체를 변경해주는 반면, concat은 새로운 배열을 만들어줌.
        const nextNames = names.concat({
            id: nextId, //nextId 값을 id로 설정한다.
            text: inputText,
        })
        setNextId(nextId + 1) // nextId 값에 1을 더해준다.
        setNames(nextNames) // names 값을 업데이트한다.
        setInputText('') // inputText를 비운다.
    }
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id)
        setNames(nextNames)
    }

    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ))
    return (
        <>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default Filter
