/**
 * state를 사용하여 코드 스플리팅을 하는 것이 그렇게 어렵지는 않지만, 매번 state를 선언해 주어야 해서 불편함
 *
 */
import React, { Component } from 'react'
import logo from '../../logo.svg'
import '../../App.css'

class App extends Component {
    state = {
        SplitMe: null,
    }

    handleClick = async () => {
        const loadedModule = await import('../SplitMe')
        this.setState({
            SplitMe: loadedModule.default,
        })
    }

    render() {
        const { SplitMe } = this.state
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p onClick={this.handleClick}>Hello React!</p>
                    {SplitMe && <SplitMe />}
                </header>
            </div>
        )
    }
}

export default App
