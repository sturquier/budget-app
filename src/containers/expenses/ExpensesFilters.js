import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DateRangePicker } from 'react-dates'

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

class ExpensesFilters extends Component {

	constructor(props) {
		super(props)

		this.state = {
			calendarFocused: null
		}

		this.onTextChange = this.onTextChange.bind(this)
		this.onSortChange = this.onSortChange.bind(this)
		this.onFocusChange = this.onFocusChange.bind(this)
		this.onDatesChange = this.onDatesChange.bind(this)
		
	}

	onTextChange(e) {
		this.props.setTextFilter(e.target.value)
	}

	onSortChange(e) {
		if (e.target.value === 'date') {
			this.props.sortByDate()
		} else if (e.target.value === 'amount') {
			this.props.sortByAmount()
		}
	}

	onFocusChange(focused) {
		this.setState({
			calendarFocused: focused
		})
	}

	onDatesChange({startDate, endDate}) {
		this.props.setStartDate(startDate)
		this.props.setEndDate(endDate)
	}

	render() {
		return (
			<div className="row form-group">
				<div className="col-md-4">
					<input 
						type="text" className="form-control" placeholder="Search expenses" 
						value={this.props.filters.text} 
						onChange={this.onTextChange}
					/>
				</div>
				<div className="col-md-4">
					<select 
						className="form-control"
						value={this.props.filters.sortBy}
						onChange={this.onSortChange}
					>
						<option value="date">Date</option>
						<option value="amount">Amount</option>
					</select>
				</div>
				<div className="col-md-4">
					<DateRangePicker
						startDate={this.props.filters.startDate}
						startDateId={"start"}
						endDate={this.props.filters.endDate}
						endDateId={"end"}
						onDatesChange={this.onDatesChange}
						focusedInput={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						showClearDates={true}
						numberOfMonths={1}
						isOutsideRange={() => false}
						displayFormat="YYYY-MM-DD"
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesFilters)