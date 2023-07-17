/**
 * 리액트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것이다.
 * - 프레젠테이셔널 컴포넌트 : 그저 props를 받아와서 화면에 UI를 보여주기만 하는 역할
 * - 컨테이너 컴포넌트 : 리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아오기도 하고 리덕스 스토어에 액션을 디스패치하는 역할
 *
 * ===> 코드의 재사용성 및 관심사의 분리에 용이
 *
 * 리덕스를 사용할 때는 액션 타입, 액션 생성 함수, 리듀서 코드를 작성해야한다.
 * 이 코드들을 actions, constants, reducers 라는 세 개의 디렉터리를 만들어 관리할 수도 있고 세 가지 역할을 하는 코드들을 파일 하나에 몰아서
 * 다 작성할 수도 있다(Ducks 패턴).
 */

import React from 'react'

const Counter = ({ number, onIncrease, onDecrease }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}> +1</button>
                <button onClick={onDecrease}> -1</button>
            </div>
        </div>
    )
}

export default Counter
