import { db } from '../firebase/config'

/**
 *	Create a single user
 */
export const doCreateUser = (id, username, email) =>
	db.ref(`users/${id}`).set({
		username,
		email
	})