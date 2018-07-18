import React from 'react'
import { doSignOut } from '../../actions/auth'

const SignOut = () => {

	return (
		<button type="button" className="btn btn-dark" onClick={doSignOut}>Sign Out</button>		
	)
}

export default SignOut