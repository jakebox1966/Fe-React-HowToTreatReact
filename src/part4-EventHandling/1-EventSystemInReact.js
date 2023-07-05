/**
 * 1. 리액트에서의 이벤트 핸들링시 주의사항
 *
 * - 이벤트 이름은 카멜 표기법으로 작성 Ex) onclick => = onClick
 * - 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을
 * - DOM 요소에만 이벤트를 설정할 수 있다. div, button, input ... 등의 DOM요소에는 이벤트를 설정할 수 있지만 우리가 직접 만든
 *   컴포넌트에는 이벤트를 설정할 수 없다. 하지만 전달받는 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있다.
 *
 * 2. 이벤트의 종류
 *
 * - Clipboard
 * - Composition
 * - Keyboard
 * - Focus
 * - Form
 * - Mouse
 * - Selection
 * - Touch
 * - UI
 * - Wheel
 * - Media
 * - Image
 * - Animation
 * - Transition
 * ** 참고 => https://facebook.github.io/react/docs/events.html
 */
import React, { useState } from 'react'

const EventSystemInReact = () => {
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

export default EventSystemInReact
