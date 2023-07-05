/**
 * JSX 문법
 *
 * 4. AND 연산자(&&) 를 사용한 조건부 렌더링
 *
 * 특정 조건을 만족하는 경우에는 렌더링, 아닐 경우 렌더링 X
 *
 * && 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를 렌더링할 때는
 * null과 마찬가지로 아무것도 나타나지 않기 때문이다. 하지만 0은 예외적으로 화면에 나타남.
 *
 */

function App() {
    // const name = "리액트";
    // return
    // <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null}</div>
    // <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>

    const number = 0
    return number && <div>내용</div>
}

export default App
