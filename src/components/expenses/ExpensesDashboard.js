import React from 'react'

import Header from '../layout/Header'
import ExpensesSummary from '../../containers/expenses/ExpensesSummary'
import ExpensesFilters from '../../containers/expenses/ExpensesFilters' 
import ExpensesList from '../../containers/expenses/ExpensesList'

const ExpensesDashboard = () => {

	return (
		<div>
			<Header/>
			<ExpensesSummary/>
			<ExpensesFilters/>
			<ExpensesList/>
		</div>
	)
}

export default ExpensesDashboard