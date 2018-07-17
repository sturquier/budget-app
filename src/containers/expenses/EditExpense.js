import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editExpense, removeExpense } from '../../actions/expenses'
import ExpenseForm from '../../components/expenses/ExpenseForm'
import { EXPENSES_DASHBOARD_PAGE } from '../../constants/Routes'

class EditExpense extends Component {

	constructor(props) {
		super(props)
		this.removeExpense = this.removeExpense.bind(this)
	}

	render() {
		return (
			<div>
				<h4>Edit Expense</h4>
				<hr/>
				<button className="btn btn-danger" onClick={this.removeExpense}>Remove</button>
				<br/>
				<br/>
				<ExpenseForm
					expense={this.props.expense}
					submitExpenseCallback={(expense) => this.submitExpenseCallback(expense)}
				/>
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
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({editExpense, removeExpense}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)