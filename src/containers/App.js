import React, { Component } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import * as routes from '../constants/Routes'
import ExpensesDashboard from '../components/expenses/ExpensesDashboard'
import AddExpense from './expenses/AddExpense'
import EditExpense from './expenses/EditExpense'
import createBrowserHistory from '../helpers/history'

class App extends Component {

  	render() {
		return (
	  		<div>
	  			<Router history={createBrowserHistory}>
	  				<Switch>
	  					<Route exact path={routes.ROOT_PAGE} render={() => (
	  						<Redirect to={routes.EXPENSES_DASHBOARD_PAGE}/>
	  					)}/>
	  					<Route exact path={routes.EXPENSES_DASHBOARD_PAGE} component={ExpensesDashboard}/>
	  					<Route exact path={routes.ADD_EXPENSE_PAGE} component={AddExpense}/>
	  					<Route exact path={routes.EDIT_EXPENSE_PAGE} component={EditExpense}/>
	  				</Switch>
	  			</Router>
	  		</div>
		)
  	}
}

export default App
