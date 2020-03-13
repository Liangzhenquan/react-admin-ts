import React from 'react'
import { RouteWithSubRoutes } from '../router'
import { RouteComponentProps } from 'react-router-dom'
import { Layout } from 'antd'
import APPSider from './AppSider'
const { Content, Header, Sider } = Layout
interface CProps {
	routes: []
}
const Home: React.FC<RouteComponentProps & CProps> = ({ routes, ...r }) => {
	console.log('routes', r)
	return (
		<Layout>
			<APPSider />
			<Layout>
				<Header />
				<Content>{RouteWithSubRoutes(routes)}</Content>
			</Layout>
		</Layout>
	)
}
export default Home
