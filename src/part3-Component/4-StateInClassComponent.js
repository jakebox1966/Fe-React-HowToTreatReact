/**
 * 리액트 에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
 * - props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값 => 컴포넌트 자신은 해당 props를 읽기전용으로만 사용 가능
 * - 리액트에는 두 가지 종류의 state가 있다. 하나는 클래스형 컴포넌트의 state, 다른 하나는 함수 컴포넌트에서 useState라는 함수를 통해 사용하는 state
 *
 * 1. 클래스형 컴포넌트의 state
 *
 * - 클래스형 컴포넌트에 state를 설정할 때는 constructor 메소드를 작성하여 설정한다. (컴포넌트 생성자 메소드, 반드시 super(props)를 호출해야함 => 클래스형 컴포넌트가
 *   상속 받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출)
 *
 * - 컴포넌트의 state는 객체 형식이어야 한다.
 *
 * - state객체 안에는 여러 값이 있을 수 있다.
 *
 * - state를 선언하는 방법 중, constructor 메소드뿐만 아니라 간단하게 state = {...}  객체 형식으로도 선언 가능하다.
 *
 * - this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트 된다. 이에 따라 state 값이 의도와는 다르게 변경되는 경우가 있는데
 *   해결책으로 this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어줄 수 있다.
 *   this.setState((prevState, props) => {
 *     return {
 *         // 업데이트 하고 싶은 내용
 *     }
 *   })
 *   위의 코드에서 prevState는 기존 상태이고, props는 현재 지니고 있는 props를 가리킨다. => props가 필요하지 않다면 생략 가능
 *
 * - this.setState가 끝난 후 특정 작업을 실행하려면 setState의 두 번째 파라미터로 콜백 함수를 등록한다.
 *
 * ***화살표 함수에서 값을 바로 반환하고 싶다면 코드 블록 { } 를 생략하면 된다. Ex) const sum = (a, b) => a + b
 *   아래 코드에서는 두 번째로 this.setState 함수를 사용할 때는 화살표 함수에서 바로 객체를 반환하도록 했기 때문에 prevState => ({}) 같은 형태
 *   => 객체 리터럴
 *    var func = params => {object : literal}  => func() undefined 반환
 *    var func = params => ({object: literal}) => 괄호로 감싸야 작동
 *   - 중괄호 {} 안의 object는 라벨처럼 취급되어 구문이 분석되기 때문에 이것을 해결하기 위해서는 객체 리터럴을 괄호로 감싸야한다.
 */

import React, {Component} from 'react'

// class ClassState extends Component {
//     constructor(props) {
//         super(props)
//         //state의 초깃값 설정하기
//         this.state = {
//             number: 0,
//             fixedNumber: 0,
//         }
//     }
//
//     render() {
//         const { number, fixedNumber } = this.state //state를 조회할 때는 this.state로 조회한다.
//         return (
//             <div>
//                 <div>
//                     <h1>{number}</h1>
//                     <h2>바뀌지 않는 값 : {fixedNumber}</h2>
//                     <button
//                         // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다
//                         onClick={() => {
//                             //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
//                             this.setState({ number: number + 1 })
//                         }}>
//                         +1
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }

class StateInClassComponent extends Component {
    state = {
        number: 0,
        fixedNumber: 0,
    }

    render() {
        const {number, fixedNumber} = this.state //state를 조회할 때는 this.state로 조회한다.
        return (
            <div>
                <div>
                    <h1>{number}</h1>
                    <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                    <button
                        // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다
                        onClick={() => {
                            // 아래 코드에서 this.setState를 두번했지만 1씩 올라간다.
                            // this.setState({ number: number + 1 })
                            // this.setState({ number: this.state.number + 1 })
                            // 해결책으로 함수를 반환한다.
                            this.setState((prevState) => {
                                return {
                                    number: prevState.number + 1,
                                }
                            })
                            this.setState(
                                (prevState) => ({
                                    number: prevState.number + 1,
                                }),
                                () => {
                                    console.log('방금 setState가 호출 되었습니다')
                                    console.log(this.state)
                                },
                            )
                        }}>
                        +1
                    </button>
                </div>
            </div>
        )
    }
}

export default StateInClassComponent
