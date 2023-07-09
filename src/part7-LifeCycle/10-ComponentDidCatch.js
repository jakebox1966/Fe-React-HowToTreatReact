/**
 *
 * componentDidCatch() 함수
 *
 * - 리액트 v16에서 새롭게 도입되었으며, 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해준다.
 *
 * Ex)
 *
 *          componentDidCatch(error, info) {
 *              this.setState({
 *                  error: true
 *              })
 *              console.log({error, info})
 *          }
 *
 * - 여기서 error는 파라미터에 어떤 에러가 발생했는지 알려 주며, info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 담고 있다.
 * - 이 메소드를 사용할 때는 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고 자신의 this.props.children 으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있다.
 */

import React, { Component } from 'react'

class ComponentDidCatch extends Component {
    state = {
        error: false,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true,
        })
        console.log({ error, errorInfo })
    }

    render() {
        if (this.state.error) return <div>에러가 발생했습니다!</div>
        return this.props.children
    }
}

export default ComponentDidCatch
