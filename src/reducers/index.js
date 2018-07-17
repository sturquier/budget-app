import { combineReducers } from 'redux'
import ExpensesReducer from './expenses'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
	expenses: ExpensesReducer,
	form: FormReducer
})

export default rootReducer