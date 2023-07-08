/**
 * CSS Module은 CSS를 불러와서 사용할 때 클래스 이름을 고유한 값, 즉 [파일 이름]_[클래스 이름]_[해시값] 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는
 * 현상을 방지해 주는 기술이다. CSS Module을 사용하기 위해 구버전(v1)의 create-react-app에서는 웹팩에서 css-loader 설정을 별도로 해 주어야 했지만, v2 버전 이상부터는
 * 따로 설정할 필요 없이 .module.css 확장자로 파일을 저장하기만 하면 CSS Module이 적용된다.
 *
 * - CSS Module이 적용된 스타일 파일을 불러오면 객체를 하나 전달받게 되는데 CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어있다.
 * - CSS module에서 전달받은 고유한 클래스 이름을 사용하려면 클래스를 적용하고 싶은 JSX 엘리먼트에 className={styles.[클래스 이름]} 형태로 전달해주면 된다.
 * - :global을 사용하여 전역적으로 선언한 클래스의 경우 평상시 해 왔던 것처럼 그냥 문자열로 넣어준다.
 *
 * - ES6문법인 템플릿 리터럴(Template Literal)을 사용하여 문자열을 합해 주면 문자열 안에 자바스크립트 레퍼런스를 쉽게 넣어 줄 수 있다.
 *      Ex)
 *          const name = '리액트'
 *          x) const message = '제 이름은 ' + name + '입니다.'
 *          o) const message = `제 이름은 ${name} 입니다.`
 *
 *
 * - classNames : CSS 클래스를 조건부로 설정할 때 유용한 라이브러리이다.
 * - sass와도 함께 사용 가능하다.
 *
 * . CSS Module에서 글러벌 클래스를 정의할 때 :global을 사용했던 것처럼 CSS Module이 아닌 일반 .css/scss 파일에서도 :local을 사용하여 CSS Module을 사용할 수 있다.
 */

import classNames from 'classnames/bind'
import React from 'react'
// import styles from './cssModule/CSSModule1.module.css'
import styles from './styles/cssModule/CSSModule1.module.scss'

const cx = classNames.bind(styles)
// const CssModule = () => {
//     return (
//         <div className={`${styles.wrapper} ${styles.inverted}`}>
//             안녕하세요, 저는 <span className="something">CSS Module!</span>
//         </div>
//     )
// }
const CssModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    )
}

export default CssModule
