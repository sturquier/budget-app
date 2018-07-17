import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTotalExpenses } from '../../helpers/expenses'
import { Link } from 'react-router-dom'

class ExpensesSummary extends Component {

	render() {
		return (
			<div>
				<h4>Expenses Summary</h4>
				<h5>Viewing {this.props.expensesCount} totalling ${this.props.expensesTotal}</h5>
				<Link to="/expenses/new" className="btn btn-info">Add expense</Link>
				<hr/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const visibleExpenses = state.expenses

	return {
		expensesCount: visibleExpenses.length,
		expensesTotal: getTotalExpenses(visibleExpenses)
	}
}

export default connect(mapStateToProps)(ExpensesSummary)