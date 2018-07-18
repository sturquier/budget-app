import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getVisibleExpenses, getTotalExpenses } from '../../helpers/expenses'
import { ADD_EXPENSE_PAGE } from '../../constants/Routes'

class ExpensesSummary extends Component {

	render() {
		return (
			<div>
				<h4>Expenses Summary</h4>
				<h5>Viewing {this.props.expensesCount} totalling ${this.props.expensesTotal}</h5>
				<Link to={ADD_EXPENSE_PAGE} className="btn btn-info">Add expense</Link>
				<hr/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

	return {
		expensesCount: visibleExpenses.length,
		expensesTotal: getTotalExpenses(visibleExpenses)
	}
}

export default connect(mapStateToProps)(ExpensesSummary)