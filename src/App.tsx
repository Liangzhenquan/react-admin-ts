import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/index.less'
import 'normalize.css'
// import Login from './views/Login'
import { routes, RouteWithRoutes } from './router'
function App() {
	return (
		<Router>
			<Switch>
				{routes.map((route) => (
					<RouteWithRoutes {...route} key={route.path} />
				))}
			</Switch>
		</Router>
	)
}

export default App
