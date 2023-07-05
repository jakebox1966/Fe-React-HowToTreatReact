/**
 * JSX 문법
 *
 * 6. 인라인 스타일링
 *
 * 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태가 아닌 객체 형태로 넣어줘야함.
 * Ex) background-color 케밥케이스가 아닌 backgroundColor 카멜케이스로 작성
 *
 */

// function ClassComponent() {
//     const name = "리액트";
//     const style = {
//         backgroundColor: 'black',
//         color: 'aqua',
//         fontSize: '48px',
//         fontWeight: 'bold',
//         padding: 16
//     }
//     return (
//        <div style={style}> {name} </div>
//     )
// }

function App() {
    const name = '리액트'
    return (
        <div
            style={{
                backgroundColor: 'black',
                color: 'aqua',
                fontSize: '48px',
                fontWeight: 'bold',
                padding: 16,
            }}>
            {' '}
            {name}{' '}
        </div>
    )
}

export default App
