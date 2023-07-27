/**
 * 아래와 같이 코드를 작성하고 빌드하면 notify 코드가 main 파일 안에 들어가게 된다.
 * 하지만 import를 상단에서 하지 않고 import() 함수 형태로 메서드 안에서 사용하면, 파일을 따로
 * 분리시켜서 저장한다. => 실제 함수가 필요한 지점에 파일을 불러와서 함수를 사용
 *
 * - import를 함수로 사용하면 Promise를 반환한다. 이렇게 import를 함수로 사용하는 문법은
 * 아직 표준 자바스크립트가 아니지만 stage-3 단계의 dynamic import 문법이다. => 웹팩에서 지원
 *
 * */
import React from 'react'
import logo from '../../logo.svg'
import '../../App.css'

// const onClick = () => {
//     notify()
// }

const onClick = () => {
    import('../notify').then((result) => result.default())
}

const CodeSplitting = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={onClick}>Hello React!</p>
            </header>
        </div>
    )
}

export default CodeSplitting
