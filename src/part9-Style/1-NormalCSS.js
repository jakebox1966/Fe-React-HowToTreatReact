/**
 * - 일반 CSS : 컴포넌트를 스타일링하는 가장 기본적인 방법
 * - Sass : 자주 사용되는 CSS 전처리기 중 하나로 확장된 CSS 문법을 사용하여 CSS 코드를 더욱 쉽게 작성할 수 있게 해준다.
 * - CSS Module : 스타일을 작성할 때 CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해주는 옵션
 * - Styled-Component : 스타일을 자바스크립트 파일에 내장시키는 방식으로 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포는트를 만들 수 있다.
 *
 * 1. 일반 CSS
 *
 * - CSS 클래스를 중복되지 않게 작성해야한다. 방법으론 이름짓는 규칙(Ex: BEM Naming), CSS Selector 가 있다.
 *      - 이름짓는 규칙 : 클래스에 컴포넌트 이름을 포함 시키거나 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 방법 등
 *      - CSS Selector : CSS Selector를 사용하면 CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용할 수 있다.
 */

import React from 'react'
import logo from '../logo.svg'
import '../App.css'

const NormalCss = () => {
    return (
        <div className="App">
            <header>
                <img src={logo} className="logo" alt="logo" />
                <p>
                    Edit<code>src/App.js</code> and save to reload
                </p>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default NormalCss
