/**
 * Ref 사용
 * 1. 콜백 함수를 통한 ref설정
 * - ref를 만드는 가장 기본적인 방법은 콜백함수를 사용하는 것이다. ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달한다.
 *  이 콜백 함수는 ref 값을 파라미터로 전달받는다. 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해 준다.
 *  ex) <input ref={(ref)=> {this.input=ref} />
 *
 * 2. createRef를 통한 ref 설정
 * - ref를 만드는 또 다른 방법은 리액트에 내장되어 있는 createRef라는 함수를 사용하는 것이다. (리액트 v16.3부터 사용가능)
 * - 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아준다. 그 다음으로 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로
 *   넣어주면 ref 설정이 완료된다. => this.input.current 로 조회
 *  ex) input = React.createRef()
 *
 *     handleFocus = () => {
 *         this.input.current.focus()
 *     }
 *
 *     render() {
 *         return (
 *             <div>
 *                 <input ref={this.input} />
 *             </div>
 *         )
 *     }
 *
 */
import React, { Component } from 'react'
import './css/1-WhenToUseRef.css'

class HowToUseRef extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '000',
        })
        this.abc.focus()
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => (this.abc = ref)}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={
                        this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''
                    }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default HowToUseRef
