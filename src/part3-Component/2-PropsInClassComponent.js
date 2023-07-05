/**
 *
 * 클래스형 컴포넌트에서 props 사용하기
 * - 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 된다. 나머지 defaultProps와 propTypes는 똑같은 방식으로 설정 가능
 * - 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정하는 방법도 있다.
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

// class PropsInClassComponent extends Component {
//     render() {
//         const { name, favoriteNumber, children } = this.props //비구조화 할당
//         return (
//             <div>
//                 안녕하세요, 제 이름은 {name} 입니다. children 값은 {children} 입니다. 제가 좋아하는
//                 숫자는 {favoriteNumber} 입니다.
//             </div>
//         )
//     }
// }
//
// PropsInClassComponent.defaultProps = {
//     name: '기본 이름',
// }
//
// PropsInClassComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired,
// }
class PropsInClassComponent extends Component {
    static defaultProps = {
        name: '기본 이름',
    }
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    }

    render() {
        const { name, favoriteNumber, children } = this.props //비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name} 입니다. children 값은 {children} 입니다. 제가 좋아하는
                숫자는 {favoriteNumber} 입니다.
            </div>
        )
    }
}

export default PropsInClassComponent
