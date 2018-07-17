import { GET_EXPENSES, ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../constants/ActionTypes'
import db from '../firebase/config'

/**
 *	Fetch all expenses
 */
export function getExpenses() {
	return function(dispatch, getState) {
		return db.ref('expenses')
			.once('value')
			.then((snapshot) => {
				const expenses = []
				
				snapshot.forEach((childSnapshot) => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					})
				})

				dispatch({
					type: GET_EXPENSES,
					payload: expenses
				})
			})
	}
}

/**
 *	Add a single expense
 */
export function addExpense(expense) {
	return function(dispatch, getState) {
		return db.ref('expenses')
			.push(expense)
			.then((reference) => {
				dispatch({
					type: ADD_EXPENSE,
					payload: {
						id: reference.key,
						...expense
					}
				})
			})
	}
}

/**
 *	Remove a single expense
 */
export function removeExpense(id) {
	return function(dispatch, getState) {
		return db.ref(`expenses/${id}`)
			.remove()
			.then(() => {
				dispatch({
					type: REMOVE_EXPENSE,
					payload: id
				})
			})
	}
}

/**
 *	Edit a single expense
 */
export function editExpense(id, updates) {
	return function(dispatch, getState) {
		return db.ref(`expenses/${id}`)
			.update(updates)
			.then(() => {
				dispatch({
					type: EDIT_EXPENSE,
					payload: {
						id,
						updates
					}
				})
			})
	}
}