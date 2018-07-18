import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { doCreateUserWithEmailAndPassword } from '../../actions/auth'
import { EXPENSES_DASHBOARD_PAGE } from '../../constants/Routes'

const validate = values => {
	const errors = {}
	if (!values.username) {
		errors.username = 'Username is required'
	}
	if (!values.email) {
		errors.email = 'Email is required'
	}
	if (!values.passwordOne) {
		errors.passwordOne = 'First password is required'
	}
	if (!values.passwordTwo) {
		errors.passwordTwo = 'Second password is required'
	}
	if ((values.passwordOne) && (values.passwordTwo) && (values.passwordOne !== values.passwordTwo)) {
		errors.passwordOne = 'Both passwords are different'
	}

	return errors
}

const renderText = ({ input, label, type, className, meta: { touched, error }}) => (
	<div className="form-group">
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} className={className}/>
			{touched && ((error && <span className="text-danger">{error}</span>))}
		</div>
	</div>
)

class SignUp extends Component {

	constructor(props) {
		super(props)

		this.state = {
			apiError: ''
		}
	}

	render() {
		const { handleSubmit, submitting } = this.props

		return (
			<div className="container">
				<h4>Sign Up Page</h4>
				<span className="text-danger">{this.state.apiError && this.state.apiError.message}</span>
				<hr/>
				<form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
					<Field className="form-control" name="username" component={renderText} type="text" label="Username"/>
					<Field className="form-control" name="email" component={renderText} type="email" label="Email"/>
					<Field className="form-control" name="passwordOne" component={renderText} type="password" label="Password"/>
					<Field className="form-control" name="passwordTwo" component={renderText} type="password" label="Repeat Password"/>
					<button className="btn btn-success" disabled={submitting}>Sign Up</button>
				</form>
			</div>
		)
	}

	handleSignUp(fields) {
		doCreateUserWithEmailAndPassword(fields.email, fields.passwordOne)
			.then(() => {
				this.props.history.push(EXPENSES_DASHBOARD_PAGE)
			})
			.catch(err => {
				this.setState({
					apiError: err
				})
			})
	}
}

export default reduxForm({
	form: 'signUpForm',
	validate
})(SignUp)