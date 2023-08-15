/**
 * Context API : 전역상태 관리 API
 * - 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용하다. 예) 로그인 정보, 애플리케이션 환경 설정, 테마
 * - 리덕스, 리액트 라우터, styled-component 등의 라이브러리는 Context API를 기반으로 구현되어있다.
 * - 전역상태관리 라이브러리로 리덕스나 MobX 를 사용할 수 도 있지만 리액트 v16.3 업데이트 이후 Context API가 개선 되었기 때문에 별도의 라이브러리를 사용하지 않아도 된다.
 *
 *
 * 사용법
 * - 새 Context 만들기 => createContext 함수 사용, 파라미터에는 해당 Context의 기본 상태를 지정
 * - ContextAPI를 사용하고자 하는 컴포넌트에서 Consumer로 지정한 Context의 값을 조회하여 사용한다.
 * - Provider를 사용하여 Context의 value를 변경한다.
 * - createContext 함수 사용할 때 파라미터로 Context의 기본값을 넣어주는데 이 기본값은 Provider를 사용하지 않았을 때만 사용된다.
 *   만약 Provider는 사용했는데 value를 명시 하지 않으면 이 기본값을 사용하지 않기 때문에 오류가 발생한다.
 *
 * ** Render Props : 컴포넌트 엘리먼트 사이에 함수를 넣어주는 패턴 (Function as a child, 혹은 Render Props 라고 함.)
 */

import React from 'react'
import {ColorConsumer} from './2-DynamicContext'

const WhatIsContextApi = () => {
    return (
        <>
            <ColorConsumer>
                {({state}) => (
                    <>
                        <div
                            style={{
                                width: '74px',
                                height: '64px',
                                background: state.color,
                            }}
                        />

                        <div
                            style={{
                                width: '32px',
                                height: '32px',
                                background: state.subColor,
                            }}
                        />
                    </>
                )}
            </ColorConsumer>
        </>
    )
}

export default WhatIsContextApi
