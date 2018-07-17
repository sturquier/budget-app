import React from 'react'
import Header from '../layout/Header'
import ExpensesSummary from '../../containers/expenses/ExpensesSummary' 
import ExpensesList from '../../containers/expenses/ExpensesList'

const ExpensesDashboard = () => {

	return (
		<div>
			<Header/>
			<ExpensesSummary/>
			<ExpensesList/>
		</div>
	)
}

export default ExpensesDashboard