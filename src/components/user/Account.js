import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'

import withAuthorization from '../session/withAuthorization'
import { getCurrentUser } from '../../actions/user'

class Account extends Component {

	componentWillMount() {
		this.props.getCurrentUser()
	}

	render() {
		return (
			<Fragment>
				<h4>Account</h4>
				<hr/>
				<h5>{this.props.currentUser.email}</h5>
				<h5>{this.props.currentUser.username}</h5>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		authUser: state.session.authUser,
		currentUser: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getCurrentUser}, dispatch)
}

const authCondition = (authUser) => !!authUser

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps, mapDispatchToProps),
)(Account)