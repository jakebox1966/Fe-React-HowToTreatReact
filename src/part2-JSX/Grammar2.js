/**
 * JSX 문법
 * 2. 자바스크립트 표현
 *
 * JSX 안에서는 자바스크립트 표현식을 쓸 수 있다. 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를
 * { } 로 감싸면 된다.
 *
 * *** const 와 let ***
 *
 * const는 ES6 문법에서 새로 도입되었으며 한번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용하는
 * 키워드이다. ES6이전에는 변수에 var 키워드를 사용했는데 const, let 과의 차이점은 scope가 다르다는 것이다.
 *
 * var Scope: 함수 단위
 * const, let : 블록 단위
 *
 */

function App() {
    const name = '리액트'
    return (
        <>
            <h1>{name} 안녕!</h1>
            <h2>잘 작동하니?</h2>
        </>
    )
}

export default App
