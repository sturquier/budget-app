import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import history from '../../helpers/history'

const ExpensesListItem = (props) => {

	const {expense} = props

	return (
		<tr onClick={() => history.push(`/expenses/${expense.id}`)}>
			<td>
				<p>{expense.title}</p>
				<span>{moment(expense.createdAt).format("MMMM Do, YYYY")}</span>
			</td>
			<td>${expense.amount}</td>
		</tr>
	)
}

export default ExpensesListItem