import React, { lazy } from 'react'
const Login = lazy(() => import('../views/Login'))
const NotFound = lazy(() => import('../views/error/NotFound'))

const Container = lazy(() => import('../container/Layout'))
const Item1 = lazy(() => import('../container/item1'))
interface RouteObj {
	path: string
	exact?: boolean
	component: keyof JSX.IntrinsicElements | any
	routes?: RouteObj[]
}
const routes: RouteObj[] = [
	{
		path: '/login',
		exact: true,
		component: Login
	},
	{
		path: '/404',
		exact: true,
		component: NotFound
	},
	{
		path: '/',
		component: Container,
		routes: [
			{
				path: '/item1',
				component: Item1
			}
		]
	}
]
export default routes
