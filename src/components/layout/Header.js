import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../../constants/Routes'

const Header = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to={routes.EXPENSES_DASHBOARD_PAGE}>Budget App</Link>
		</nav>
	)
}

export default Header