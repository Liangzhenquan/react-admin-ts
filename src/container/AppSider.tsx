import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import { SmileTwoTone } from '@ant-design/icons'
import AppMenu from './AppMenu'
import { RouteComponentProps } from 'react-router-dom'
const { Sider } = Layout
const Logo = styled.div`
	text-align: center;
`
const LogoIcon = styled.div`
	height: 1rem;
	line-height: 1rem;
	font-size: 1rem;
	color: #fff;
`
const AppSider: React.FC<RouteComponentProps> = (props) => {
	const link: string = 'https://github.com/Liangzhenquan'
	return (
		<Sider>
			<Logo>
				<a href={link} rel="noopener noreferrer" target="_blank">
					<LogoIcon>Admin</LogoIcon>
				</a>
			</Logo>
			<AppMenu {...props} />
		</Sider>
	)
}
export default AppSider
