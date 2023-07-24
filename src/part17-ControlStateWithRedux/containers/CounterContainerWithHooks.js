/**
 * - 리덕스 스토어와 연동된 컨테이너 컴포넌트를 만들 때 connect 함수를 사용하는 대신 react-redux에서 제공하는 Hooks를 사용할 수도 있다.
 *
 * 1. useSelector
 * - useSelector Hook을 사용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.
 *      Ex)
 *          const 결과 = useSelector(상태 선택 함수)
 *
 *          여기서 상태 선택함수는 mapStateToProps와 형태가 같다.
 *
 *
 * 2. useDispatch
 * - useDispatch Hook은 컴포넌트 내부에서 내장 함수 dispatch를 사용할 수 있게 해준다.
 *      Ex)
 *          const dispatch = useDispatch()
 *          dispatch({type: 'SAMPLE_ACTION'}
 *
 *
 * - 컴포넌트 성능을 최적화해야 하는 상황이 온다면 useCallback으로 액션을 디스패치하는 함수를 감싸 준다.
 *
 * 3. useStore
 * - useStore Hooks를 사용하면 컴포넌트 내부에서 리덕스 스토어 객체를 직접 사용할 수 있다. => 사용할 상황 흔치 않음
 *      Ex)
 *          const store = useStore()
 *          store.dispatch({type: 'SAMPLE_ACTION })
 *          store.getState()
 */

import React, { useCallback } from 'react'
import Counter from '../components/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../modules/counterEasy'

const CounterContainerWithHooks = () => {
    const number = useSelector((state) => state.counter.number)
    const dispatch = useDispatch()

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
    return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
}

export default CounterContainerWithHooks
