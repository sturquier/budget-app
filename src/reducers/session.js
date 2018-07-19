import { SET_USER_AUTH } from '../constants/ActionTypes'

const INITIAL_STATE = {
	authUser: null
}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SET_USER_AUTH:
			return {
				...state,
				authUser: action.authUser
			}
	}

	return state
}