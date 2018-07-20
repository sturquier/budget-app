import { GET_CURRENT_USER } from '../constants/ActionTypes'

export default function(state = [], action) {
	switch(action.type) {
		case GET_CURRENT_USER:
			return action.payload
	}

	return state
}