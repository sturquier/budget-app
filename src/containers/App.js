import React, { Component, Fragment } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import './App.css'
import * as routes from '../constants/Routes'
import createBrowserHistory from '../helpers/history'
import withAuthentication from '../components/session/withAuthentication'

import Header from '../components/layout/Header'
import Home from '../components/Home'
import ExpensesDashboard from '../components/expenses/ExpensesDashboard'
import AddExpense from './expenses/AddExpense'
import EditExpense from './expenses/EditExpense'
import SignUp from '../components/auth/SignUp'
import SignIn from '../components/auth/SignIn'
import PasswordForget from '../components/auth/PasswordForget'
import Account from '../components/user/Account'

class App extends Component {

  	render() {
		return (
	  			<Router history={createBrowserHistory}>
	  				<Fragment>
	  					<Header/>
	  					<div className="container">
		  					<Switch>
			  					<Route exact path={routes.ROOT_PAGE} component={Home}/>
	  							<Route exact path={routes.EXPENSES_DASHBOARD_PAGE} component={ExpensesDashboard}/>
	  							<Route exact path={routes.ADD_EXPENSE_PAGE} component={AddExpense}/>
	  							<Route exact path={routes.EDIT_EXPENSE_PAGE} component={EditExpense}/>
	  							<Route exact path={routes.SIGN_UP_PAGE} component={SignUp}/>
	  							<Route exact path={routes.SIGN_IN_PAGE} component={SignIn}/>
		  						<Route exact path={routes.PASSWORD_FORGET_PAGE} component={PasswordForget}/>
		  						<Route exact path={routes.ACCOUNT_PAGE} component={Account}/>
		  					</Switch>
	  					</div>
	  				</Fragment>
	  			</Router>	
		)
  	}
}

export default withAuthentication(App)
