import React from 'react'

import Header from '../layout/Header'
import ExpensesSummary from '../../containers/expenses/ExpensesSummary'
import ExpensesFilters from '../../containers/expenses/ExpensesFilters' 
import ExpensesList from '../../containers/expenses/ExpensesList'

const ExpensesDashboard = () => {

	return (
		<div>
			<Header/>
			<div className="container">
				<ExpensesSummary/>
				<ExpensesFilters/>
				<ExpensesList/>
			</div>
		</div>
	)
}

export default ExpensesDashboard