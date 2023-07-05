/**
 * 특정 DOM 요소에 어떤 작업을 해야 할 때 일반적인 html에서는 id를 사용한다. 물론 리액트에서도 id를 사용할 수는 있지만
 * 컴포넌트를 재사용함에 있어 중복 id를 가진 DOM이 여러 개 생길 수 있으니 특별한 상황이 아니면 사용하지 않는다.
 * id를 사용하여 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법을 ref라 한다.
 *
 * ref는 DOM을 꼭 직접적으로 건드려야 할 때 사용한다.
 * - 특정 input에 포커스 주기
 * - 스크롤 박스 조작하기
 * - Canvas 요소에 그림 그리기 등
 */

import React, { Component } from 'react'
import './css/1-WhenToUseRef.css'

class WhenToUseRef extends Component {
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
    }

    render() {
        return (
            <div>
                <input
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

export default WhenToUseRef
