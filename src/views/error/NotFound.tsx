import React from 'react'
import { Result, Button } from 'antd'
function NotFound() {
	return (
		<Result
			status="404"
			title="404"
			subTitle="抱歉，无法找到该页面"
			extra={<Button type="primary">返回</Button>}
		/>
	)
}
export default NotFound
