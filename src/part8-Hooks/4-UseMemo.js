/**
 * useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.
 * - 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식이다.
 *
 * - useMemo의 첫 번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주고 두 번째 파라미터에는 deps 배열을 넣어준다. 이 배열 안에 넣은 내용이 바뀌면,
 *   등록했던 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 된다.
 */

import React, { useMemo, useState } from 'react'

const getAverage = (numbers) => {
    console.log('평균값 계산 중..')
    if (numbers.length === 0) return 0
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length
}

const UseMemo = () => {
    const [list, setList] = useState([])
    const [number, setNumber] = useState('')

    const onChange = (e) => {
        setNumber(e.target.value)
    }
    const onInsert = (e) => {
        const nextList = list.concat(parseInt(number))
        setList(nextList)
        setNumber('')
    }

    const avg = useMemo(() => getAverage(list), [list])
    return (
        <div>
            <input type="text" value={number} onChange={onChange} />
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

export default UseMemo
