import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Redux from './part17-ControlStateWithRedux/Redux'
import rootReducer from './part17-ControlStateWithRedux/modules'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(),
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
    <Provider store={store}>
        <Redux />,
    </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
