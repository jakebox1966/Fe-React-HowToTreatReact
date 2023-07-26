import React, { useEffect } from 'react'
import Counter from '../../components/thunk/Counter'
import { connect } from 'react-redux'
import { decreaseAsync, increaseAsync } from '../../modules/saga/counterWithSaga'

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    useEffect(() => {
        console.log(number)
    }, [number])
    return <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
}

export default connect(
    (state) => ({ number: state.counter }),

    // { increase, decrease },
    { increaseAsync, decreaseAsync },
)(CounterContainer)
