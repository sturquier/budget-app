import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getExpenses } from '../../actions/expenses'
import ExpensesListItem from '../../components/expenses/ExpensesListItem'
import { getVisibleExpenses } from '../../helpers/expenses'
import withAuthorization from '../../components/session/withAuthorization'

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
				<table className="table table-hover">
					<thead className="thead-light">
						<tr>
							<th>Expense</th>
							<th>Amount</th>
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

const authCondition = (authUser) => !!authUser

export default connect(mapStateToProps, mapDispatchToProps)
(withAuthorization(authCondition)
(ExpensesList))