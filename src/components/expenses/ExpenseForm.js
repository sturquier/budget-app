import React, { Component, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

const validate = values => {
	const errors = {}
	if (!values.title) {
		errors.title = 'Title is required'
	}
	if (!values.amount) {
		errors.amount = 'Amount is required'
	}

	return errors
}

const renderText = ({ 
	input, label, type, className, meta: { touched, error }
}) => (
	<div className="form-group">
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} className={className}/>
			{touched && ((error && <span className="text-danger">{error}</span>))}
		</div>
	</div>
)

class ExpenseForm extends Component {
	
	componentDidMount() {
		this.props.initialize({
			title: this.state.title,
			amount: this.state.amount,
			createdAt: this.state.createdAt
		})
	}

	constructor(props) {
		super(props)

		this.state = {
			title: props.expense ? props.expense.title : '',
			amount: props.expense ? props.expense.amount : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false
		}
	}

	render() {
		const { handleSubmit, submitting } = this.props

		return (
			<Fragment>
				<form onSubmit={handleSubmit(this.submitExpense.bind(this))}>
					<Field className="form-control" name="title" component={renderText} type="text" label="Title"/>
					<Field className="form-control" name="amount" component={renderText} type="number" label="Amount"/>
					<div className="form-group">
						<SingleDatePicker 
							date={this.state.createdAt}
							onDateChange={date => this.setState({ createdAt: date })}
							focused={this.state.calendarFocused}
							onFocusChange={({ focused }) => this.setState({ calendarFocused: focused })} 
							numberOfMonths={1}
							isOutsideRange={() => false}
							displayFormat="YYYY-MM-DD"
						/>
					</div>
					<button type="submit" className="btn btn-success" disabled={submitting}>Save expense</button>
				</form>
			</Fragment>
		)
	}

	formatDateBeforeSubmit() {
		const formattedDate = moment(this.state.createdAt).format('YYYY-MM-DD')

		return formattedDate
	}

	submitExpense(expense) {
		expense.createdAt = this.formatDateBeforeSubmit()
		this.props.submitExpenseCallback(expense)
	}
}

export default reduxForm({
	form: 'addExpenseForm',
	validate
})(ExpenseForm)