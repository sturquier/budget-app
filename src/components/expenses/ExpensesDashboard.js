import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import ExpensesSummary from '../../containers/expenses/ExpensesSummary'
import ExpensesFilters from '../../containers/expenses/ExpensesFilters' 
import ExpensesList from '../../containers/expenses/ExpensesList'
import withAuthorization from '../session/withAuthorization'

const ExpensesDashboard = ({ authUser }) => {

	return (
		<div>
			<ExpensesSummary/>
			<ExpensesFilters/>
			<ExpensesList/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		authUser: state.session.authUser
	}
}

const authCondition = (authUser) => !! authUser

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps),
)(ExpensesDashboard)