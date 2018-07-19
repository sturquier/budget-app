import React, { Component } from 'react'
import { connect } from 'react-redux'

import { auth } from '../../firebase/config'
import { SET_USER_AUTH } from '../../constants/ActionTypes'

const withAuthentication = (Component) => {
	class WithAuthentication extends Component {

		componentDidMount() {
			const { onSetAuthUser } = this.props

			auth.onAuthStateChanged(authUser => {
				authUser
					? onSetAuthUser(authUser)
					: onSetAuthUser(null)
			})
		}

		render() {
			return (
				<Component/>
			)
		}
	}

	const mapDispatchToProps = (dispatch) => ({
		onSetAuthUser: (authUser) => dispatch({
			type: SET_USER_AUTH,
			authUser
		})
	})

	return connect(null, mapDispatchToProps)(WithAuthentication)
}

export default withAuthentication