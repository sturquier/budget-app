import React, { Component, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { doSignInWithEmailAndPassword } from '../../actions/auth'
import { EXPENSES_DASHBOARD_PAGE, PASSWORD_FORGET_PAGE } from '../../constants/Routes'

const validate = values => {
	const errors = {}
	if (!values.email) {
		errors.email = 'Email is required'
	}
	if (!values.password) {
		errors.password = 'Password is required'
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

class SignIn extends Component {

	constructor(props) {
		super(props)

		this.state = {
			apiError: ''
		}
	}

	render() {
		const { handleSubmit, submitting } = this.props

		return (
			<Fragment>
				<h4>Sign In Page</h4>
				<span className="text-danger">{this.state.apiError && this.state.apiError.message}</span>
				<hr/>
				<form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
					<Field className="form-control" name="email" component={renderText} type="email" label="Email"/>
					<Field className="form-control" name="password" component={renderText} type="password" label="Password"/>
					<button className="btn btn-success" disabled={submitting}>Sign In</button>
				</form>
				<br/>
				<Link to={PASSWORD_FORGET_PAGE} className="btn btn-info">Forgot Password ?</Link>
			</Fragment>
		)
	}

	handleSignIn(fields) {
		doSignInWithEmailAndPassword(fields.email, fields.password)
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
	form: 'signInForm',
	validate
})(SignIn)