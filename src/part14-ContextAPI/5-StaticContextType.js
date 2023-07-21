/**
 * 클래스형 컴포넌트에서 Context를 조금 더 쉽게 사용하고 싶다면 static contextType을 정의할 수 있다.
 *
 * - this.context를 조회했을 때 현재 Context의 value를 가리키게 된다. setColor를 호출하고 싶다면 this.context.actions.setColor로 호출가능 하다.
 * - static contextType을 정의하면 클래스 메소드에서도 Context에 넣어둔 함수를 호출할 수 있다.
 * - 한 클래스에서 하나의 Context밖에 사용하지 못 한다.
 *
 */

import React, { Component } from 'react'
import ColorContext from './2-DynamicContext'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

class StaticContextType extends Component {
    static contextType = ColorContext

    handleSetColor = (color) => {
        this.context.actions.setColor(color)
    }
    handleSetSubColor = (subColor) => {
        this.context.actions.setSubColor(subColor)
    }

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>

                <div style={{ display: 'flex' }}>
                    {colors.map((color) => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer',
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={(e) => {
                                e.preventDefault()
                                this.handleSetSubColor(color)
                            }}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default StaticContextType
