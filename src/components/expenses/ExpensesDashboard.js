import React from 'react'
import Header from '../layout/Header' 
import ExpensesList from '../../containers/expenses/ExpensesList'

const ExpensesDashboard = () => {

	return (
		<div>
			<Header/>
			<ExpensesList/>
		</div>
	)
}

export default ExpensesDashboard