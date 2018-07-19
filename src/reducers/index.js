import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

import ExpensesReducer from './expenses'
import FiltersReducer from './filters'
import SessionReducer from './session'

const rootReducer = combineReducers({
	expenses: ExpensesReducer,
	filters: FiltersReducer,
	session: SessionReducer,
	form: FormReducer
})

export default rootReducer