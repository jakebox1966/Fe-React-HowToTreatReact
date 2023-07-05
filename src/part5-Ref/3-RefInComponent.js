/**
 * 컴포넌트에 ref 달기
 *
 * 리액트에서는 컴포넌트에도 ref를 달 수 있다. 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓴다.
 *
 * ex) <MyComponent
 *       ref={(ref)=> {this.myComponent}}
 *      />
 *
 * *** 주의할 점
 * - 문법상으로는 App.js의 onClick = {this.scrollBox.scrollToBottom} 같은 형식으로 작성해도 틀린것은 아니다.
 *   하지만 컴포넌트가 처음 렌더링될 때는 this.scrollBox 값이 undefined 이므로 this.scrollBox.scrollToBottom 값을
 *   읽어 오는 과정에서 오류가 발생한다. 화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서
 *   this.scrollBox.scrollToBottm 메소드를 실행하면, 버튼을 누를 때 (이미 한번 렌더링을 해서 this.scrollBox를 설정한 시점)
 *   this.scrollBox.scrollToBottm 값을 읽어 와서 실행하므로 오류가 발생하지 않는다.
 */

import React, { Component } from 'react'

class RefInComponent extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box
        this.box.scrollTop = scrollHeight - clientHeight
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative',
        }
        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)',
        }
        return (
            <div
                style={style}
                ref={(ref) => {
                    this.box = ref
                }}>
                <div style={innerStyle}></div>
            </div>
        )
    }
}

export default RefInComponent
