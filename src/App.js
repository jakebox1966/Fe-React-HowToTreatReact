// import WhenToUseRef from './part5-Ref/1-WhenToUseRef'
//
// const App = () => {
//     return (
//         // <PropsInFunctionComponent
//         //     name="React"
//         //     favoriteNumber={123}
//         //     favoriteNumber1={123}
//         //     favoriteNumber2={123}>
//         //     리액트
//         // </PropsInFunctionComponent>
//         // <PropsInClassComponent favoriteNumber={123}>리액트</PropsInClassComponent>
//         // <StateInClassComponent />
//         // <StateInFunctionComponent />
//         // <EventHandlingPracticeInClassComponent />
//         // <EventHandlingPracticeInFunctionComponent />
//     )
// }
//
// export default App

// import React, {Component} from 'react'

// 랜덤 색상을 생성합니다.
// function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16)
// }
// class App extends Component {
//     state = {
//         color: '#000000',
//     }
//
//     handleClick = () => {
//         this.setState({
//             color: getRandomColor(),
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <RefInComponent ref={(ref) => (this.scrollBox = ref)} />
//                 <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//                 <Map />
//                 <Filter />
//                 <button onClick={this.handleClick}>랜덤 색상</button>
//                 <ComponentDidCatch>
//                     <LifeCycleInReact color={this.state.color} />
//                 </ComponentDidCatch>
//
//             </div>
//         )
//     }
// }
//
// export default App
import React from 'react'
import Sass from './part9-Style/2-Sass'

const App = () => {
    // const [visible, setVisible] = useState(false)

    return (
        <div>
            {/*<UseState />*/}
            {/*<UseEffect />*/}
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        setVisible(!visible)*/}
            {/*    }}>*/}
            {/*    {visible ? '숨기기' : '보이기'}*/}
            {/*</button>*/}
            {/*<hr />*/}
            {/*{visible && <UseEffect />}*/}
            {/*<UseReducer />*/}
            {/*<UseMemo />*/}
            {/*<UseCallback />*/}
            {/*<UseRef />*/}
            {/*<NormalCss />*/}
            <Sass />
        </div>
    )
}

export default App
