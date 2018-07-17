import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpensesListItem = (props) => {

	const {expense} = props

	return (
		<tr>
			<td>{expense.title}</td>
			<td>{moment(expense.createdAt).format("MMMM Do, YYYY")}</td>
			<td>${expense.amount}</td>
			<td>
				<Link to={`/expenses/${expense.id}`}>
					<i className="fas fa-edit"></i>
				</Link>
			</td>
		</tr>
	)
}

export default ExpensesListItem