import React, { Component } from 'react'
interface Props {
	children: JSX.Element
	fallback?: boolean
}
interface State {
	hasError: boolean
}
class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			hasError: false
		}
	}
	private getDerivedStateFromError(error: string) {
		return { hasError: true }
	}
	render() {
		const { children, fallback } = this.props
		const { hasError } = this.state
		if (hasError) {
			if (fallback) {
				return null
			}
			return <div>系统崩溃了</div>
		}
		return children
	}
}
export default ErrorBoundary
