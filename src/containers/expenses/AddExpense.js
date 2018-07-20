import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { addExpense } from '../../actions/expenses'
import ExpenseForm from '../../components/expenses/ExpenseForm'
import { EXPENSES_DASHBOARD_PAGE } from '../../constants/Routes'
import withAuthorization from '../../components/session/withAuthorization'
import history from '../../helpers/history'

class AddExpense extends Component {
	
	render() {

		return (
			<Fragment>
				<ExpenseForm submitExpenseCallback={(expense) => this.submitExpenseCallback(expense)}/>
			</Fragment>
		)
	}

	submitExpenseCallback(expense) {
		this.props.addExpense(expense)
		history.push(EXPENSES_DASHBOARD_PAGE)
	}
}

const mapStateToProps = (state) => {
	return {
		authUser: state.session.authUser
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addExpense}, dispatch)
}

const authCondition = (authUser) => !!authUser

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps, mapDispatchToProps),
)(AddExpense)