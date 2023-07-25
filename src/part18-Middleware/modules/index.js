import { combineReducers } from 'redux'
import counterWithThunk from './counterWithThunk'
import counter from './counter'
import sample from './sample'

const rootReducer = combineReducers({
    counter,
    counterWithThunk,
    sample,
})

export default rootReducer
