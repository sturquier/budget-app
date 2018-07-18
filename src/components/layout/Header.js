import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { ROOT_PAGE, EXPENSES_DASHBOARD_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from '../../constants/Routes'
import SignOut from '../auth/SignOut'
import AuthUserContext from '../session/AuthUserContext'

const AuthHeader = () =>
	<Fragment>
		<ul className="navbar-nav mr-auto">
			<li className="nav-item">
				<Link className="nav-link" to={EXPENSES_DASHBOARD_PAGE}>Expenses</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="">TODO ACCOUNT</Link>
			</li>
		</ul>
		<ul className="navbar-nav ml-auto">
			<li className="nav-item"><SignOut/></li>
		</ul>
	</Fragment>

const NonAuthHeader = () =>
	<Fragment>
		<ul className="navbar-nav mr-auto">
			<li className="nav-item">
				<Link className="nav-link" to={SIGN_IN_PAGE}>Sign In</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to={SIGN_UP_PAGE}>Sign Up</Link>
			</li>
		</ul>
	</Fragment>

const Header = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to={ROOT_PAGE}>Budget App</Link>
				<div className="collapse navbar-collapse">
					<AuthUserContext.Consumer>
						{ authUser => authUser
							? <AuthHeader/> 
							: <NonAuthHeader/> 
						}
					</AuthUserContext.Consumer>
				</div>
			</div>
		</nav>
	)
}

export default Header