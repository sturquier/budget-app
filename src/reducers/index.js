import { combineReducers } from 'redux'
import ExpensesReducer from './expenses'

const rootReducer = combineReducers({
	expenses: ExpensesReducer
})

export default rootReducer