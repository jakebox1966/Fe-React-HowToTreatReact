/**
 * 자바스크립트 배열 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링할 수 있다.
 * map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후
 * 그 결과로 새로운 배열을 생성한다.
 *
 * * callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세가지이다.
 * - currentValue : 현재 처리하고 있는 요소
 * - index: 현재 처리하고 있는 요소의 index 값
 * - array: 현재 처리하고 있는 원본 배열
 * * thisArg(Optional) : callback 함수 내부에서 사용할 this 레퍼런스
 *
 * 같은 원리로 기존 배열로 컴포넌트로 구성된 배열을 생성할 수 있다.
 * =================================================================================
 *
 * - key : 리액트에서 key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다.
 *         key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다.
 *         하지만 key가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다. => 최적화(?)
 *         ** key 값은 고유해야한다. **
 *
 * - 리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 한다. => 불변성 유지를 해주어야 나중에 리액트
 *   컴포넌트의 성능을 최적화할 수 있다.
 */

import React, {useState} from 'react' // const Map = () => {

// const Map = () => {
//     const name = ['눈사람', '얼음', '눈', '바람']
//     // 고유한 값이 없을 때만 index 값을 key로 사용해야한다.
//     // => index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링 하지 못함
//     const nameList = name.map((name, index) => <li key={index}>{name}</li>)
//     return (
//         <div>
//             <ul>{nameList}</ul>
//         </div>
//     )
// }

const Map = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ])
    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(5) //=> 새로운 항목을 추가할 때 사용할 id

    const onChange = (e) => setInputText(e.target.value)
    const onClick = () => {
        // 배열 새 항목을 추가할 때 push가 아니라 concat을 사용함
        // push는 기존 배열 자체를 변경해주는 반면, concat은 새로운 배열을 만들어줌.
        const nextNames = names.concat({
            id: nextId, //nextId 값을 id로 설정한다.
            text: inputText,
        })
        setNextId(nextId + 1) // nextId 값에 1을 더해준다.
        setNames(nextNames) // names 값을 업데이트한다.
        setInputText('') // inputText를 비운다.
    }

    const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)
    return (
        <>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default Map
