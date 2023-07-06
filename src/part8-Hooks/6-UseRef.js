/**
 * useRef Hook은 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해준다. => 클래스형 컴포넌트의 ref와 같은 기능
 *
 * - useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킨다.
 * - 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있다. => 로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미
 *
 *  Ex)
 *      const id = useRef(1)
 *
 * ** ref안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다는 점에 주의해야 한다.
 *
 */

import React, { useCallback, useMemo, useRef, useState } from 'react'

const getAverage = (numbers) => {
    console.log('평균값 계산 중..')
    if (numbers.length === 0) return 0
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length
}
const UseRef = () => {
    const [list, setList] = useState([])
    const [number, setNumber] = useState('')
    const inputEl = useRef(null)

    const onChange = useCallback((e) => {
        setNumber(e.target.value)
    }, []) // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(
        (e) => {
            const nextList = list.concat(parseInt(number))
            setList(nextList)
            setNumber('')
            inputEl.current.focus()
        },
        [number, list],
    ) // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list])
    return (
        <div>
            <input type="text" value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => {
                    <li key={index}> {value}</li>
                })}
            </ul>
            <div>
                <b>평균값 : </b> {avg}
            </div>
        </div>
    )
}

export default UseRef
