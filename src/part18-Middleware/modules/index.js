import { combineReducers } from 'redux'
import sampleRefactoring from './sampleRefactoring'
import loading from './loading'

const rootReducer = combineReducers({
    // counter,
    // counterWithThunk,
    // sample,
    sampleRefactoring,
    loading,
})

export default rootReducer
