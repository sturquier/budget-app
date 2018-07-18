import React, { Component } from 'react'

import ExpensesSummary from '../../containers/expenses/ExpensesSummary'
import ExpensesFilters from '../../containers/expenses/ExpensesFilters' 
import ExpensesList from '../../containers/expenses/ExpensesList'
import withAuthorization from '../session/withAuthorization' 

class ExpensesDashboard extends Component {

	render() {
		return (
			<div>
				<ExpensesSummary/>
				<ExpensesFilters/>
				<ExpensesList/>
			</div>
		)
	}
}

const authCondition = (authUser) => !!authUser

export default withAuthorization(authCondition)(ExpensesDashboard)