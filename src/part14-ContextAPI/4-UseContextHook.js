/**
 * Context에 있는 값을 사용할 때 Consumer 대신 다른 방식을 사용할 수도 있다. => useContext Hook, static ContextType
 *
 * - useContext : 함수 컴포넌트에서 Context를 편하게 사용할 수 있다.
 * - static ContextType : 클래스형 컴포넌트에서 Context를 편하게 사용할 수 있다.
 *
 */

import React, { useContext } from 'react'
import ColorContext from './2-DynamicContext'

const UseContextHook = () => {
    const { state } = useContext(ColorContext)

    return (
        <>
            <div
                style={{
                    width: '74px',
                    height: '64px',
                    background: state.color,
                }}
            />

            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subColor,
                }}
            />
        </>
    )
}

export default UseContextHook
