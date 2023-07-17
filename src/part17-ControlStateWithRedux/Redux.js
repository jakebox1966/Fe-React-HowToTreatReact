/**
 * 5. 스토어 만들기
 * - 스토어를 만들고 리액트 애플리케이션에 리덕스를 적용하는 작업은 src 디렉터리의 index.js 에서 이루어 진다.
 * - 리액트 컴포넌트에서 스토어를 사용할 수 있도록 App 컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸준다.
 * - Provider 컴포넌트를 사용할 때는 store를 props로 전달해 준다.
 *
 * Redux DevTools의 설치 및 적용
 * - Redux DevTools는 리덕스 개발자 도구이며, 크롬 확장 프로그램으로 설치하여 사용할 수 있다.
 * - 사용법
 *
 *  1) const store = createStore(
 *      rootReducer,
 *      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 *  )
 *
 *  2) redux-devtools-extension 패키지 설치
 *  const store = createStore(rootReducer, composeWithDevTools())
 *
 *
 *
 *
 */

import React from 'react'
import CounterContainer from './containers/CounterContainer'
import TodosContainer from './containers/TodosContainer'

const Redux = () => {
    return (
        <div>
            <CounterContainer />
            {/*<Counter number={0} />*/}
            <hr />
            <TodosContainer />
            {/*<Todos />*/}
        </div>
    )
}

export default Redux
