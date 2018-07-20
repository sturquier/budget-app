import { db } from '../firebase/config'
import { GET_CURRENT_USER } from '../constants/ActionTypes'

/**
 *	Create a single user
 */
export const doCreateUser = (id, username, email) =>
	db.ref(`users/${id}`).set({
		username,
		email
	})

/**
 *	Fetch current user
 */
export function getCurrentUser() {
	return function(dispatch, getState) {
		const uid = getState().session.authUser.uid

		return db.ref(`users/${uid}`)
			.once('value')
			.then((snapshot) => {
				dispatch({
					type: GET_CURRENT_USER,
					payload: snapshot.val()
				})
			})
	}
}