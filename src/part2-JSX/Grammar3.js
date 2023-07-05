/**
 * JSX 문법
 *
 * 3. if문 대신 조거부 연산자
 *
 * JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없다. 하지만 조건에 따른
 * 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if문을 사용하여 사전에 값을 설정하거나,
 * { } 안에 조건부 연산자를 사용하면 된다.
 *
 *
 */

function App() {
    const name = '리액트'
    return <div>{name === '리액트' ? <h1> 리액트 입니다.</h1> : <h2> 리액트가 아닙니다. </h2>}</div>
}

export default App
