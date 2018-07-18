import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { auth } from '../../firebase/config'
import AuthUserContext from './AuthUserContext'
import { SIGN_IN_PAGE } from '../../constants/Routes'

const withAuthorization = (authCondition) => (Component) => {
	class WithAuthorization extends Component {

		componentDidMount() {
			auth.onAuthStateChanged(authUser => {
				if (!authCondition(authUser)) {
					this.props.history.push(SIGN_IN_PAGE)
				}
			})
		}

		render() {
			return (
				<AuthUserContext.Consumer>
					{ authUser => authUser ? <Component/> : null}
				</AuthUserContext.Consumer>
			)
		}
	}

	return withRouter(WithAuthorization)
}

export default withAuthorization