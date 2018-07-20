import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'

import { editExpense, removeExpense } from '../../actions/expenses'
import ExpenseForm from '../../components/expenses/ExpenseForm'
import { EXPENSES_DASHBOARD_PAGE } from '../../constants/Routes'
import withAuthorization from '../../components/session/withAuthorization'

class EditExpense extends Component {

	constructor(props) {
		super(props)

		this.removeExpense = this.removeExpense.bind(this)
	}

	render() {
		return (
			<div>
				<ExpenseForm
					expense={this.props.expense}
					submitExpenseCallback={(expense) => this.submitExpenseCallback(expense)}
				/>
				<br/>
				<button className="btn btn-danger" onClick={this.removeExpense}>Remove</button>
			</div>
		)
	}

	submitExpenseCallback(expense) {
		this.props.editExpense(this.props.match.params.id, expense)
		this.props.history.push(EXPENSES_DASHBOARD_PAGE)
	}

	removeExpense() {
		this.props.removeExpense(this.props.match.params.id)
		this.props.history.push(EXPENSES_DASHBOARD_PAGE)
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id),
		authUser: state.session.authUser
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({editExpense, removeExpense}, dispatch)
}

const authCondition = (authUser) => !!authUser

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps, mapDispatchToProps),
)(EditExpense)