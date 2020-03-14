import React, { Suspense } from 'react'
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'
import { hasAuth } from '../utils/authorization'
import { getLocalStorage } from '../utils/localStorage'
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
interface SubProps {
	routes: []
}
const RouteWithRoutes: React.FC<RProps> = (route) => {
	return (
		<Route
			path={route.path}
			key={route.path}
			exact={route.exact}
			render={(props) => {
				let isAuth: boolean = hasAuth(
					props.location.pathname,
					getLocalStorage('token')
				)
				if (isAuth) {
					return (
						<Suspense fallback={<Loading />}>
							<route.component routes={route.routes} {...props} />
						</Suspense>
					)
				}
				return <Redirect to="/login" />
			}}
		/>
	)
}

const RouteWithSubRoutes: React.FC<SubProps> = ({ routes }) => {
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/dashboard" />
			</Route>
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
