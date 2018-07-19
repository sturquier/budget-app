import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { auth } from '../../firebase/config'
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
				this.props.authUser ? <Component/> : null
			)
		}
	}

	const mapStateToProps = (state) => {
		return {
			authUser: state.session.authUser
		}
	}

	return compose(
		withRouter,
		connect(mapStateToProps),
	)(WithAuthorization)
}

export default withAuthorization