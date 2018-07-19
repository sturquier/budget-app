import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import withAuthorization from '../session/withAuthorization'

const Account = ({ authUser }) => {
	console.log(authUser)
	return (
		<div>
			<h4>Account : {authUser.email}</h4>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		authUser: state.session.authUser
	}
}

const authCondition = (authUser) => !!authUser

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps),
)(Account)