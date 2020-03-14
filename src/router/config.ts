import { lazy } from 'react'
const Login = lazy(() => import('../views/Login'))
const NotFound = lazy(() => import('../views/error/NotFound'))

const Container = lazy(() => import('../container/Layout'))
const DashBoard = lazy(() => import('../views/home/DashBoard'))
const Item1 = lazy(() => import('../views/home/Item1'))
const Item2 = lazy(() => import('../views/home/Item2'))
interface RouteObj {
	path: string
	exact?: boolean
	component: keyof JSX.IntrinsicElements | any
	routes?: RouteObj[]
}
interface MenuObj {
	title: string
	key: string
	icon?: string
	sub?: MenuObj[]
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
				path: '/dashboard',
				component: DashBoard
			},
			{
				path: '/item/item1',
				component: Item1
			},
			{
				path: '/item/item2',
				component: Item2
			}
		]
	}
]
const menus: MenuObj[] = [
	{
		title: '首页',
		key: '/dashboard',
		icon: 'home'
	},
	{
		title: 'item',
		key: '/item',
		icon: 'home',
		sub: [
			{
				title: 'item1',
				key: '/item/item1'
			},
			{
				title: 'item2',
				key: '/item/item2'
			}
		]
	},
	{
		title: '测试',
		key: '/test',
		sub: [
			{
				title: '测试1',
				key: '/item3'
			}
		]
	}
]
export { routes, menus }
