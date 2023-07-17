/**
 * - 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부른다.
 * - 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 한다.
 *
 *      Ex)
 *          connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
 *
 * - mamStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
 * - mapDispatchToProps : 액션 생성함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
 *
 * - connect 함수를 호출하고 나면 또 다른 함수를 반환하는데 반환된 함수에 컴포넌트를 파라미터로 넣어 주면 리덕스와 연동된 컴포넌트가 만들어 진다.
 *
 *      Ex)
 *          const makeContainer = connect(mapStateToProps, mapDispatchToProps)
 *          makeContainer(연동할 컴포넌트)
 *
 * - 컴포넌트에서 액션을 디스패치하기 위해 각 액션 생성 함수를 호출하고 dispatch로 감싸는 작업이 번거로울 수 있다. => 액션 생성 함수의 개수가 많아지면 관리하기 힘듬
 *   리덕스에서 제공하는 bindActionCreators 유틸 함수로 해결 가능하다.
 */

import React from 'react'
import Counter from '../components/Counter'
import { connect } from 'react-redux'
import { decrease, increase } from '../modules/counter'

const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
}

// const mapStateToProps = (state) => ({
//     number: state.counter.number,
// })
//
// const mapDispatchToProps = (dispatch) => ({
//     //임시 함수
//     increase: () => {
//         console.log('increase')
//         dispatch(increase())
//     },
//     decrease: () => {
//         console.log('decrease')
//         dispatch(decrease())
//     },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)

export default connect(
    // 익명 함수로 변경
    (state) => ({
        number: state.counter.number,
    }),
    // 코드 간소화 방법 1
    // 1. bindActionCreators 유틸 함수 사용
    // (dispatch) =>
    //         bindActionCreators(
    //             {
    //                 increase,
    //                 decrease,
    //             },
    //             dispatch,
    //         ),
    // )(CounterContainer)

    // 코드 간소화 방법 2
    // 2. mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 전달
    // 아래 와 같이 두번째 파라미터를 아예 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업을 해준다.
    {
        increase,
        decrease,
    },
)(CounterContainer)
