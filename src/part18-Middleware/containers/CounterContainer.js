import React, { useEffect } from 'react'
import Counter from '../components/Counter'
import { connect } from 'react-redux'
import { decreaseAsync, increaseAsync } from '../modules/counterWithThunk'

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    useEffect(() => {
        console.log(number)
    }, [number])
    return <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
}

export default connect(
    (state) => ({ number: state.counterWithThunk }),

    // { increase, decrease },
    { increaseAsync, decreaseAsync },
)(CounterContainer)
