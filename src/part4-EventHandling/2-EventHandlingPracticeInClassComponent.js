import React, { Component } from 'react'

/**
 * - 이벤트 시 생성되는 e 객체는 SynteticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다. 네이티브 이벤트와 인터페이스가
 *   같으므로 순수 자바스크립트에서 html 이벤트를 다룰 때와 똑같이 사용하면 된다.
 *   SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다. => -0.5초 뒤에 e 객체
 *   참조시 객체 내부의 모든 값이 비워짐 (이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출)
 *
 * - 함수가 호출될 때 this는 호출부에 따라 결정되므로 클래스의 임의 메서드가 특정 html 요소의 이벤트로 등록되는 과정에서 메서드와 this의
 *   관계가 끊어져 버린다. 따라서 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와
 *   바인딩(binding)하는 작업이 필요하다. => 바인딩하지 않으면 this가 undefined
 *   매번 바인딩 작업까지 같이 하기 번거로우니 Propety Initializer Syntax(바벨의 transform-class-properties 문법)를 사용하여
 *   화살표 함수 형태로 메소드를 정의할 수 있다.
 *
 * - 여러 개의 input을 핸들링 하려면 각 input에 맞는 메소드를 여러개 만드는게 아니라 event 객체를 활용하여 메소드 하나로 해결할 수 있다.
 *   객체 안에서 key를 [] 로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용되어 이벤트 핸들링 메소드를 작성할 수 있다.
 */
class EventHandlingPracticeInClassComponent extends Component {
    state = {
        username: '',
        message: '',
    }

    // 화살표 함수 사용하여 constructor 삭제
    // constructor(props) {
    //     super(props)
    //     this.handleChange = this.handleChange.bind(this)
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value,
    //     })
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    //
    // handleClick(e) {
    //     alert(this.state.message)
    //     this.setState({
    //         message: '',
    //     })
    // }
    handleClick = (e) => {
        alert(this.state.username + ':' + this.state.message)
        this.setState({
            username: '',
            message: '',
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick()
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventHandlingPracticeInClassComponent
