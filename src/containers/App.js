import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import * as routes from '../constants/Routes'
import createBrowserHistory from '../helpers/history'
import withAuthentication from '../components/session/withAuthentication'

import Home from '../components/Home'
import ExpensesDashboard from '../components/expenses/ExpensesDashboard'
import AddExpense from './expenses/AddExpense'
import EditExpense from './expenses/EditExpense'
import SignUp from '../components/auth/SignUp'
import SignIn from '../components/auth/SignIn'
import PasswordForget from '../components/auth/PasswordForget'

class App extends Component {

  	render() {
		return (
	  		<div>
	  			<Router history={createBrowserHistory}>
	  				<Switch>
	  					<Route exact path={routes.ROOT_PAGE} component={Home}/>
	  					<Route exact path={routes.EXPENSES_DASHBOARD_PAGE} component={ExpensesDashboard}/>
	  					<Route exact path={routes.ADD_EXPENSE_PAGE} component={AddExpense}/>
	  					<Route exact path={routes.EDIT_EXPENSE_PAGE} component={EditExpense}/>
	  					<Route exact path={routes.SIGN_UP_PAGE} component={SignUp}/>
	  					<Route exact path={routes.SIGN_IN_PAGE} component={SignIn}/>
	  					<Route exact path={routes.PASSWORD_FORGET_PAGE} component={PasswordForget}/>
	  				</Switch>
	  			</Router>
	  		</div>
		)
  	}
}

export default withAuthentication(App)
