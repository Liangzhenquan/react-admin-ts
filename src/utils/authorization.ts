const hasAuth = (path: string, token: string | null) => {
	if (path === '/login' || path === '/404' || token !== null) return true
	return false
}
export { hasAuth }
