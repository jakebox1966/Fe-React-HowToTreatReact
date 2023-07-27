/**
 * Loadable Components는 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리이다.
 * - 서버 사이드 렌더링 지원 (React.lazy와 Suspense는 지원 안함).
 * - 렌더링하기 전에 필요할 때 스플리팅된 파일을 미리 불러올 수 있는 기능
 * - 서버 사이드 렌더링이란 웹 서비스의 초기 로딩 속도 개선, 캐싱 및 검색 엔진 최적화를 가능하게
 *   해 주는 기술이다.
 *   초기렌더링을 서버 쪽에서 처리 => 사용자는 서버에서 렌더링한 html 결과물을 받아와서 사용하기 때문에
 *   초기 로딩 속도도 개선되고, 검색 엔진에서 크롤링할 때도 문제 없음.
 *
 * - 사용법은 React.lazy와 비슷하지만 Suspense 사용 안함
 *
 * - 미리 불러오는 기능, 타임아웃, 로딩 UI 딜레이, 서버사이드렌더링 호환등 다양한 기능을 제공
 *
 */

import React, {useState} from 'react'
import logo from '../../logo.svg'
import loadable from '@loadable/component'
// import SplitMe from '../SplitMe'

// 로딩 중에 다른 UI를 보여주고 싶다면 loadable을 사용하는 부분에 파라미터 추가
const SplitMe = loadable(() => import('../SplitMe'), {
    fallback: <div>loading...</div>,
})

// 1. 코드 스플리팅
// const App = () => {
//     const [visible, setVisible] = useState(false)
//     const onClick = () => {
//         setVisible(true)
//     }
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p onClick={onClick}>Hello React!</p>
//                 {visible && <SplitMe />}
//             </header>
//         </div>
//     )
// }

// 2. preload
const App = () => {
    const [visible, setVisible] = useState(false)
    const onClick = () => {
        setVisible(true)
    }
    const onMouseOver = () => {
        SplitMe.preload()
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={onClick} onMouseOver={onMouseOver}>
                    Hello React!
                </p>
                {visible && <SplitMe />}
            </header>
        </div>
    )
}

export default App
