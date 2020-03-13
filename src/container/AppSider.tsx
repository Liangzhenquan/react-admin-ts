import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'
const { Sider } = Layout
const Logo = styled.div`
	text-align: center;
`
const LogoIcon = styled.div`
	font-size: 1rem;
	color: #fff;
`
const AppSider: React.FC = (props) => {
	console.log('props', props)
	const link: string = 'https://github.com/Liangzhenquan'
	return (
		<Sider>
			<Logo>
				<a href={link} rel="noopener noreferrer" target="_blank">
					<LogoIcon />
				</a>
			</Logo>
		</Sider>
	)
}
withRouter(AppSider)
export default AppSider
