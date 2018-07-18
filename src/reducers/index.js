import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

import ExpensesReducer from './expenses'
import FiltersReducer from './filters'

const rootReducer = combineReducers({
	expenses: ExpensesReducer,
	filters: FiltersReducer,
	form: FormReducer
})

export default rootReducer