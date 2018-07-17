import { GET_EXPENSES, ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../constants/ActionTypes'

export default function(state = [], action) {
	switch(action.type) {
		case GET_EXPENSES:
			return action.payload
		case ADD_EXPENSE:
			return [...state, action.payload]
		case REMOVE_EXPENSE:
			return state.filter(({ id }) => id !== action.payload)
		case EDIT_EXPENSE:
			return state.map((expense) => {
				if (expense.id === action.payload) {
					return {
						...expense,
						...action.updates
					}
				}

				return expense
			})
	}

	return state
}