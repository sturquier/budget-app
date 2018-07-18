import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>, 
	document.getElementById('root')
)
registerServiceWorker()
