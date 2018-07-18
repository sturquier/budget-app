import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<AlertProvider template={AlertTemplate}>
			<App />
		</AlertProvider>
	</Provider>, 
	document.getElementById('root')
)
registerServiceWorker()
