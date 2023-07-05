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

import React, { Component } from 'react'
import RefInComponent from './part5-Ref/3-RefInComponent'

class App extends Component {
    render() {
        return (
            <div>
                <RefInComponent ref={(ref) => (this.scrollBox = ref)} />
                <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
                {/*<button onClick={this.scrollBox.scrollToBottom()}>맨 밑으로</button>*/}
            </div>
        )
    }
}

export default App