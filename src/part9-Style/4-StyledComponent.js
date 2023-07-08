/**
 * Styled Component : 자바스크립트 파일 안에 스타일을 선언하는 방식의 한 종류
 *
 * - Tagged 템플릿 리터럴 : 스타일을 작성할 때 `을 사용하여 만든 문자열에 스타일 정보를 넣었다. 여기서 사용한 문법을 Tagged 템플릿 리터럴이라고 한다.
 *                        CSS Module을 배울 때 나온 일반 템플릿 리터럴과 다른 점은 템플릿 안에 자바스크립트 객체나 함수를 전달할 때 온전히 추출할 수 있다는 것이다.
 *                        Tagged 템플릿 리터럴을 사용하면 템플릿 사이사이에 들어가는 자바스크립트 객체나 함수의 원본 값을 그대로 추출할 수 있다.
 *                        => 스타일 쪽에서 props쉽게 조회 가능
 *
 * - styled-component를 사용하여 스타일링된 엘리먼트를 만들 때는 컴포넌트 파일의 상단에서 styled를 불러오고, styled.태그명을 사용하여 구현한다.
 * - styled.div 뒤에 tagged 템플릿 리터럴 문법을 통해 스타일을 넣어 주면, 해당 스타일이 적용된 div로 이루어진 리액트 컴포넌트가 생성된다.
 * - 컴포넌트를 styled의 파라미터에 넣는 경우에는 해당 컴포넌트 className props를 최상위 DOM의 className 값으로 설정하는 작업이 내부적으로 되어 있어야 한다.
 * Ex)
 *      const Sample = ({className}) => {
 *          return <div className={className}>Sample</div>
 *      }
 *
 *      const StyledSample = styled(Sample)`
 *          font-size: 2rem
 *      `
 *
 * - Styled-components를 사용할 때 반응형 디자인을 적용하려면 일반 CSS를 사용할 때와 같이 media 쿼리(query)를 사용하면 된다.
 *
 * - 반복해서 적용해야 하는 컴포넌트들이 있다면 이 작업을 함수화 하여 간편하게 사용 가능하다.
 */
import styled, { css } from 'styled-components'

const sizes = {
    desktop: 1024,
    tablet: 768,
}
// 위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 준다.
// 참고 : https://www.styled-components.com/docs/advanced#media-template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `

    return acc
}, {})

const Box = styled.div`
    /* props로 넣어 준 값을 직접 전달해 줄 수 있다.*/
    background: ${(props) => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고 가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채운다.*/
    width: 1024px;
    margin: 0 auto;
    //@media (max-width: 1024px) {
    //    width: 768px;
    //}
    //@media (max-width: 768px) {
    //    width: 100%;
    //}
    ${media.desktop`width: 768px`}
    ${media.tablet`width:100%`}
`

/* 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 css를 불러와야 한다.*/
const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능*/

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /*다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 준다.*/

    ${(props) =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;

            &:hover {
                background: white;
                color: black;
            }
        `}
    & + button {
        margin-left: 1rem;
    }
`

const StyledComponent = () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
)

export default StyledComponent
