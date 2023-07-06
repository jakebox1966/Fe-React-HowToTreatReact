/**
 *
 * useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다. => 클래스형 컴포넌트의
 * componentDidMount 또는 componentDidUpdate를 합친 형태
 *
 * 1. 마운트될 때만 실행하고 싶을 때
 *   - useEffect 에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째
 *     파라미터로 빈 배열을 넣어 주면 된다.
 *
 * 2. 특정 값이 업데이트될 때만 실행하고 싶을 때
 *   - useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 준다.
 *   => class형 컴포넌트에서는 다음과 같다.
 *
 *   Ex) componentDidUpdate(preProps, prevState) {
 *       if(prevProps.value !== this.props.value) {
 *           doSomething()
 *       }
 *   }
 *
 * ** useEffect의 두 번째 파라미터인 배열안에는 useState를 통해 관리하고 있는 상태를 넣어도 되고, props로 전달받은 값을 넣어도 된다.
 *
 * 3. 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanUp) 함수를 반환해 주어야 한다.
 *
 */

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.')
    //     console.log({
    //         name,
    //         nickname,
    //     })
    // })
    // useEffect(() => {
    //     console.log(name)
    // }, [name])

    // useEffect(() => {
    //     console.log('마운트될 때만 실행됩니다.')
    // }, [])

    useEffect(() => {
        console.log('effect')
        console.log(name)
        return () => {
            console.log('cleanUp')
            console.log(name)
        }
    }, [name])
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

export default UseEffect
