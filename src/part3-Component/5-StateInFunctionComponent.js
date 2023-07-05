/**
 * 리액트 16.8 이전 버전에서는 함수 컴포넌트에서 state를 사용할 수 없었다. 하지만 16.8 이후부터는 useState라는 함수를 사용하여
 * 함수 컴포넌트에서도 state를 사용할 수 있게 되었다. => useState Hook
 *
 * 1. 배열 비구조화 할당
 * - 배열 비구조화 할당은 이전에 배운 객체 비구조화 할당과 비슷하다. => 배열 안에 들어 있는 값을 쉽게 추출
 *   const array = [1, 2]
 *   const one = array[0]      ============> const [one, two] = array
 *   const two = array[1]
 *
 * 2. useState
 * - ussState의 함수의 인자에는 상태의 초깃값을 넣어준다. class State와는 다르게 객체 뿐만아니라 숫자, 문자열, 객체, 배열도 가능하다.
 *
 * - 함수 호출시, 배열이 반환되는데 첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어 주는 함수 (setter 함수) 이다. 비구조화 할당을
 *   통해 이름을 자유롭게 정해줄 수 있다.
 *
 * - useState는 한 컴포넌트에서 여러 번 사용해도 상관없다. => 여러 상태를 관리 가능
 *
 * *** 클래스형 컴포넌트든 함수 컴포넌트든 state를 사용할 때 주의사항 ***
 * - state 값을 바꾸어야할 때는 setState 혹은 useState의 setter 함수를 사용해야 한다.
 * - 배열이나 객체를 업데이트 할 때는 배열이나 객체의 사본을 만들고 그 사본에 값을 업데이트한 후, 사본의 상태를 setState혹은 setter함수를 통해
 *   업데이트 한다.
 *   (객체에 대한 사본을 만들 때는 spread 연산자(...) 를 사용하여 처리하고 배열에 대한 사본을 만들 때는 배열의 내장 함수 활용)
 */

import React, { useState } from 'react'

const StateInFunctionComponent = () => {
    const [color, setColor] = useState('black')
    const [message, setMessage] = useState('')
    const onClickEnter = () => setMessage('안녕하세요!')
    const onClickLeave = () => setMessage('안녕히 가세요!')

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    )
}

export default StateInFunctionComponent
