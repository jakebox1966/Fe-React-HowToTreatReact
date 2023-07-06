/**
 * 모든 리액트 컴포넌트에는 라이프사이클(수명 주기)이 존재한다. 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비 과정에서 시작하여
 * 페이지에서 사라질 때 끝난다. 컴포넌트를 처음으로 렌더링 할 때나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리해야 할 수도 있고, 또
 * 불필요한 업데이트를 방지해야 할 수도 있다. 이때 사용할 수 있는 것이 라이프사이클 메소드이다.
 *
 * - 클래스형 컴포넌트에서만 사용가능하다. => 함수 컴포넌트에서는 Hooks 사용
 * - 라이프사이클 메소드의 종류는 9가지 이다.
 * - 라이프사이클은 마운트, 업데이트, 언마운트로 총 세 가지 카테고리로 나뉜다.
 *
 *      1. 마운트 : DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트(mount)라고 한다.
 *      - constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메소드
 *      - getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메소드
 *      - render : 준비된 UI를 렌더링하는 메소드
 *      - componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메소드
 *
 *      2. 업데이트 : 컴포넌트는 다음과 같은 네 가지 경우에 업데이트한다.
 *      1) props가 바뀔 때
 *      2) state가 바뀔 때
 *      3) 부모 컴포넌트가 리렌더링될 때
 *      4) this.forceUpdate로 강제로 렌더링을 트리거할 때
 *
 *      - getDerivedStateFromProps : 이 메소드는 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출된다. props의 변화에 따라
 *        state 값에도 변화를 주고 싶을 때 사용한다.
 *      - shouldComponentUpdate : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메소드이다. 이 메소드는 true 또는 false 값을
 *        반환해야 하며, true 반환 시 다음 라이프사이클 메소드를 수행하고 false 반환 시 작업을 중지 한다(컴포넌트가 리렌더링되지 않음).
 *        만약 특정 함수에서 this.forceUpdate() 함수를 호출하면 이 과정을 생략하고 바로 render 함수를 호출한다.
 *      - render : 컴포넌트를 리렌더링한다.
 *      - getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출한다.
 *      - componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출한다.
 *
 *      3. 언마운트 : 마운트의 반대 과정인 컴포넌트를 DOM에서 제거하는 것을 언마운트(unmount)라고 한다.
 *      - componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출한다.
 *
 *      etc. Error : 에러 발생 시 사용할 수 있는 메소드
 *      - componentDidCatch : 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해준다.
 *
 */

import React, { Component } from 'react'

class LifeCycleInReact extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null // ref를 설정할 부분

    constructor(props) {
        super(props)
        console.log('constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps')
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color }
        }
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps, nextState)
        // 숫자의 마지막 자리가 4면 리렌더링하지 않는다.
        return nextState.number % 10 != 4
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState)
        if (snapshot) {
            console.log('업데이트되기 직전 색상 : ', snapshot)
        }
    }

    render() {
        console.log('render')

        const style = {
            color: this.props.color,
        }
        return (
            <div>
                {/*{this.props.missing.value}*/}
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleInReact
