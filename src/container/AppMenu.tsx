import React, { useState, useEffect } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import { routes } from '../router'
import { Menu } from 'antd'
import { menus } from '../router'
const { SubMenu } = Menu
interface MenuProps {
	title: string
	key: string
	icon?: string
	sub?: MenuProps[]
}

const renderMenuItem = (menu: MenuProps) => {
	return (
		<Menu.Item key={menu.key}>
			<Link to={menu.key}>{menu.title}</Link>
		</Menu.Item>
	)
}
const renderSub = (menus: MenuProps) => {
	return (
		<SubMenu
			key={menus.key}
			title={
				<span>
					<span>{menus.title}</span>
				</span>
			}
		>
			{menus.sub && menus.sub.map((menu, i) => renderMenuItem(menu))}
		</SubMenu>
	)
}
const AppMenu: React.FC<RouteComponentProps> = ({ location }) => {
	const [selectedKeys, setSelectedKeys] = useState<string[]>([])
	const [openKeys, setOpenKeys] = useState<string[] | null>(null)
	useEffect(() => {
		setSelectedKeys([location.pathname])
		setOpenKeys(['/item'])
	}, [location.pathname])
	return (
		<Menu
			theme="dark"
			// openKeys={openKeys}
			selectedKeys={selectedKeys}
			mode="inline"
		>
			{menus.map((menu, i) =>
				menu.sub ? renderSub(menu) : renderMenuItem(menu)
			)}
		</Menu>
	)
}

export default AppMenu
