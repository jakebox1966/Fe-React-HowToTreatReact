/**
 * JSX 문법
 *
 * 8. 꼭 닫아야 하는 태그
 *
 * 일반적인 html 에서 코드를 작성할 때 가끔 태그를 닫지 않은 상태로 코드를 작성하기도 한다. 예) input, br
 * 하지만 jsx에서는 태그를 닫지 않으면 오류가 발생한다.
 */

import './App.css'

/**
 * 오류 발생
 */
// function App() {
//     const name = "리액트";
//     return (
//         <>
//             <div className="react">{name}</div>
//             <input>
//         </>
//     )
// }

/**
 * 정상 동작
 */
// function App() {
//     const name = "리액트";
//     return (
//         <>
//             <div className="react">{name}</div>
//             <input></input>
//         </>
//     )
// }

/**
 * self-closing 태그 사용도 가능
 */
function App() {
    const name = '리액트'
    return (
        <>
            <div className="react">{name}</div>
            <input />
        </>
    )
}

export default App
