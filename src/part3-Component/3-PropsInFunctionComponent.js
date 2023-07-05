/**
 * 1. ES6의 화살표 함수
 * - 화살표 함수(arrow function)은 ES6 문법에서 함수를 표현하는 새로운 방식 => 주로 함수를 파라미터로 전달할 때 유용
 * - 일반 함수와 바라보고 있는 this 값이 다름. 일반함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 속한 인스턴스를 가리킴.
 * - 화살표 함수는 값을 연산하여 바로 반환해야 할 때 사용하면 가독성을 높일 수 있음 Ex) const triple = (value) => value * 3
 *
 * 2. props
 * - properties의 줄인 표현으로 컴포넌트 속성을 설정할 때 사용
 * - 리액트 컴포넌트를 사용할 때 태그 사이의 내용을 보여주는 props는 children => props.children 으로 값 사용가능
 *
 * 3. 비구조화 할 당 문법을 통해 props 내부 값을 추출할 수 있다. (구조 분해 문법) 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용할 수 있다.
 *
 * 4. propTypes를 통한 props 검증
 * - 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes를 사용. => import 구문을 사용하여 propTypes 불러와야함
 * - propTypes를 지정하지 않았을 때 경고 메시지 띄우려면 => propTypes를 지정할 때 뒤에 isRequired를 붙인다.
 */

// const PropsInFunctionComponent = (props) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {props.name} 입니다. children 값은 {props.children} 입니다.
//         </div>
//     )
// }

// const PropsInFunctionComponent = (props) => {
//     const { name, children } = props
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name} 입니다. children 값은 {children} 입니다.
//         </div>
//     )
// }
//
// PropsInFunctionComponent.defaultProps = {
//     name: '기본이름',
// }
import PropTypes from 'prop-types'

const PropsInFunctionComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다. children 값은 {children} 입니다.
        </div>
    )
}

PropsInFunctionComponent.defaultProps = {
    name: '기본 이름',
}

PropsInFunctionComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
}

export default PropsInFunctionComponent
