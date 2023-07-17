/**
 * 동적 Context 사용
 *
 * - Context의 value에는 무조건 상태 값만 있어야 하는 것이 아니다. 함수를 전달해 줄 수도 있다.
 * - createContext에 기본값을 넣는 이유는 Context 코드를 볼 때 내부 값이 어떻게 구성되어 있는지 파악하기 쉽고, 실수로 Provider를 사용하지 않았을 대 리액트
 *   애플리케이션에서 에러가 발생하지 않는다.
 *
 *
 */

import { createContext, useState } from 'react'

const ColorContext = createContext({
    state: { color: 'black', subColor: 'red' },
    action: {
        setColor: () => {},
        setSubColor: () => {},
    },
})

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black')
    const [subColor, setSubColor] = useState('red')

    const value = {
        state: { color, subColor },
        actions: { setColor, setSubColor },
    }

    return <ColorContext.Provider value={value}> {children}</ColorContext.Provider>
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer }

export default ColorContext
