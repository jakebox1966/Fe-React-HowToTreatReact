/**
 * JSX 문법
 *
 * 7. class 대신 className
 *
 * 일반 html과는 달리 class속성을 className으로 설정해야함 => 오류
 * 리액트 v16 이상부터는 class를 className으로 변환시켜주고 경고를 띄움
 */

import './App.css'

function App() {
    const name = '리액트'
    return <div className="react"> {name} </div>
}

export default App
