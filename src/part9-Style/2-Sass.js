/**
 * Sass(Syntactically Awesome Style Sheet)
 *
 * - CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해주고, 스타일 코드의 재활용성을 높여 줄 뿐만 아니라 코드의 가독성을 높여서 유지보수를 쉽게 해준다.
 * - Sass에서는 두 가지 확장자 .scss와 .sass 를 지원한다.
 *
 *
 * - sass와 scss의 차이점
 *      1. sass 확장자는 중괄호 ({})와 세미콜론(;)을 사용하지 않는다.
 *      2. scss 확장자는 기존 css를 작성하는 방식과 크게 다르지 않다.
 */

import React from 'react'
import './SassComponent.scss'

const Sass = () => {
    return (
        <div className="SassComponent">
            <div className="box red" />
            <div className="box orange" />
            <div className="box yellow" />
            <div className="box green" />
            <div className="box blue" />
            <div className="box indigo" />
            <div className="box violet" />
        </div>
    )
}

export default Sass
