import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Wizard from './Components/Wizard'

export default (
	<Switch>
		<Route component={Wizard} path='/wizard'/>
		<Route component={Dashboard} exact path='/'/>
	</Switch>
)