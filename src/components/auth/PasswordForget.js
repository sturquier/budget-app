import React, { Component, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withAlert } from 'react-alert'

import { doResetPassword } from '../../actions/auth'
import { SIGN_IN_PAGE } from '../../constants/Routes'

const validate = values => {
	const errors = {}
	if (!values.email) {
		errors.email = 'Email is required'
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

class PasswordForget extends Component {

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
				<h4>Password Forget Page</h4>
				<span className="text-danger">{this.state.apiError && this.state.apiError.message}</span>
				<hr/>
				<form onSubmit={handleSubmit(this.handleResetPassword.bind(this))}>
					<Field className="form-control" name="email" component={renderText} type="email" label="Email"/>
					<button className="btn btn-info" disabled={submitting}>Reset Password</button>
				</form>
			</Fragment>
		)
	}

	handleResetPassword(fields) {
		doResetPassword(fields.email)
			.then(() => {
				this.props.alert.success('A link has been sent to your email address')
				this.props.history.push(SIGN_IN_PAGE)
			})
			.catch(err => {
				this.setState({
					apiError: err
				})
			})
	}
}

export default reduxForm({
	form: 'passwordForgetForm',
	validate
})(withAlert(PasswordForget))