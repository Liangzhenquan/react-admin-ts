import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loading from '../components/common/Loading'
// interface SRProps {
// 	path?: string
// }
interface RProps {
	path?: string
	component?: keyof JSX.IntrinsicElements | any
	routes?: any
	exact?: boolean
}
interface SubRProps {
	routes: []
}
const RouteWithRoutes: React.FC<RProps> = (route) => {
	return (
		<Route
			path={route.path}
			key={route.path}
			exact={route.exact}
			render={(props) => (
				<Suspense fallback={<Loading />}>
					<route.component routes={route.routes} {...props} />
				</Suspense>
			)}
		/>
	)
}

const RouteWithSubRoutes = (routes: []) => {
	// console.log(routes)
	// return null
	return (
		<Switch>
			{routes.map((route: RProps, i: number) => (
				<RouteWithRoutes key={i} {...route} />
			))}
			<Route path="*">
				<Redirect to="/404" />
			</Route>
		</Switch>
	)
}
export { RouteWithRoutes, RouteWithSubRoutes }
