/**
 * JSX 문법
 *
 * 5. undefiend를 렌더링 하지 않기
 *
 * 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링이 안됨. => 오류
 * 어떤 값이 undefined일 수도 있다면, OR(||) 연산자를 사용하여 대체값을 지정할 수 있다.
 *
 */

// function App() {
//     const name = undefined;
//     return name || '값이 undefiend입니다.';
// }

function App() {
    const name = undefined
    return <div>{name || '리액트'}</div>
}

export default App
