import { combineReducers } from 'redux'
import ExpensesReducer from './expenses'
import FiltersReducer from './filters'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
	expenses: ExpensesReducer,
	filters: FiltersReducer,
	form: FormReducer
})

export default rootReducer