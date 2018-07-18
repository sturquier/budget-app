import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addExpense } from '../../actions/expenses'
import ExpenseForm from '../../components/expenses/ExpenseForm'
import { EXPENSES_DASHBOARD_PAGE } from '../../constants/Routes'
import Header from '../../components/layout/Header'

class AddExpense extends Component {
	
	render() {

		return (
			<div>
				<Header/>
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<ExpenseForm submitExpenseCallback={(expense) => this.submitExpenseCallback(expense)}/>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		)
	}

	submitExpenseCallback(expense) {
		this.props.addExpense(expense)
		this.props.history.push(EXPENSES_DASHBOARD_PAGE)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addExpense}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddExpense)