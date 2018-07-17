import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getExpenses } from '../../actions/expenses'
import ExpensesListItem from '../../components/expenses/ExpensesListItem'
import { getVisibleExpenses } from '../../helpers/expenses'

class ExpensesList extends Component {

	componentWillMount() {
		this.props.getExpenses()
	}

	renderExpenses() {
		const {expenses} = this.props

		return expenses.map((expense) => {
			return <ExpensesListItem key={expense.id} expense={expense}/>
		})
	}

	render() {
		return (
			<div>
				<h4>Expenses List</h4>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Title</th>
							<th>Created At</th>
							<th>Amount</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{this.renderExpenses()}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getExpenses}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList)