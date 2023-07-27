/**
 * React.lazy와 Suspense를 사용하면 state를 선언하지 않고도 간편하게 컴포넌트 코드 스플리팅을 할 수 있다.
 *
 * - React.lazy는 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해주는 유틸 함수이다.
 *
 *      Ex)
 *          const SplitMe = React.lazy(()=> import('./SplitMe'))
 *
 * - Suspense는 리액트 내장 컴포넌트로서 코드 스플리팅된 컴포넌트를 로딩하도록 발동시킬 수 있고,
 *   로딩이 끝나지 않았을 때 보여줄 UI를 설정할 수 있다.
 *   fallback props를 통해 로딩 중에 보여 줄 JSX를 지정할 수 있다.
 *      Ex)
 *          import { Suspense } from 'react'
 *          (...)
 *          <Suspense fallback={<div>loading...</div>} >
 *             <SplitMe />
 *          </ Suspense>
 *
 *
 */

import React, {Suspense, useState} from 'react'
import logo from '../../logo.svg'
// import SplitMe from '../SplitMe'

const SplitMe = React.lazy(() => import('../SplitMe'))

const App = () => {
    const [visible, setVisible] = useState(false)
    const onClick = () => {
        setVisible(true)
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={onClick}>Hello React!</p>
                <Suspense fallback={<div>loading...</div>}>{visible && <SplitMe />}</Suspense>
            </header>
        </div>
    )
}

export default App
