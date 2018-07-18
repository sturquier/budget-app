import React from 'react'
import { Link } from 'react-router-dom'

import { EXPENSES_DASHBOARD_PAGE } from '../../constants/Routes'
import SignOut from '../auth/SignOut'

const Header = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to={EXPENSES_DASHBOARD_PAGE}>Budget App</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"><SignOut/></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header