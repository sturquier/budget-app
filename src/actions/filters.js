import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE } from '../constants/ActionTypes'

/**
 *	Set textFilter of expenses search input
 */
export function setTextFilter(text = '') {
	return function(dispatch) {
		dispatch({
			type: SET_TEXT_FILTER,
			text
		})
	}
}

/**
 *	Sort expenses by date
 */
export function sortByDate() {
	return function(dispatch) {
		dispatch({
			type: SORT_BY_DATE
		})
	}
}

/**
 *	Sort expenses by amount
 */
export function sortByAmount() {
	return function(dispatch) {
		dispatch({
			type: SORT_BY_AMOUNT
		})
	}
}

/**
 *	Set startDate of expenses datepicker
 */	
export function setStartDate(startDate) {
	return function(dispatch) {
		dispatch({
			type: SET_START_DATE,
			startDate
		})
	}
}

/**
 *	Set endDate of expenses datepicker
 */
export function setEndDate(endDate) {
	return function(dispatch) {
		dispatch({
			type: SET_END_DATE,
			endDate
		})
	}
}