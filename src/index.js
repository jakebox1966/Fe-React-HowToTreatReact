import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import rootReducer from './part17-ControlStateWithRedux/modules'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { rootSaga } from './part18-Middleware/modules'
import { logger } from 'redux-logger/src'
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import Middleware from './part18-Middleware/Middleware'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)

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
        <Middleware />
    </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
