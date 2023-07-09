/**
 * Hooks는 리액트 v16.8에 새로 도입된 기능으로 함수 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의
 * 기능을 제공한다.
 *
 * useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다. => class 컴포넌트의 state
 *
 * Ex) const [value, setValue] = useState(0)
 *
 * - useState 함수의 파라미터에는 상태의 기본값을 넣어 준다. 이 함수가 호출되면 배열을 반환하는데, 첫 번째 원소는 상태 값, 두 번째 원소는 상태를
 *   설정하는 함수이다. 이 함수에 파라미터를 넣어서 호출하면 절달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링된다.
 *
 * - 하나의 useState 함수는 하나의 상태 값만 관리할 수 있다. => 관리해야 할 상태가 여러 개라면 useState를 여러번 사용하면 된다.
 *
 */

import React, { useState } from 'react'

const UseState = () => {
    // const [value, setValue] = useState(0)
    // return (
    //     <div>
    //         <p>
    //             현재 카운터 값은 <b>{value}</b> 입니다.
    //         </p>
    //         <button onClick={() => setValue(value + 1)}> +1</button>
    //         <button onClick={() => setValue(value - 1)}> -1</button>
    //     </div>
    // )

    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }
    return (
        <div>
            <div>
                <input type="text" value={name} onChange={onChangeName} />
                <input type="text" value={nickname} onChange={onChangeNickname} />
            </div>

            <div>
                <div>
                    <b>이름 :</b> {name}
                </div>
                <div>
                    <b>닉네임 :</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default UseState
