import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import rootReducer from './part17-ControlStateWithRedux/modules'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './part18-Middleware/modules'
import { logger } from 'redux-logger/src'
import ReduxThunk from 'redux-thunk'
import SampleContainer from './part18-Middleware/containers/SampleContainer'

const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(logger, ReduxThunk)),
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <React.StrictMode>
    // <BrowserRouter>
    // <App />,
    // <Axios />
    // </BrowserRouter>,
    // <ComponentOptimization/>
    // <Immer />,
    // </React.StrictMode>,
    //     <Redux />
    <Provider store={store}>
        {/*<Middleware />*/}
        <SampleContainer />
    </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
