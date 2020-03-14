interface SetStor {
	(key: string, val: any): boolean
}
interface getStor {
	(key: string): any
}
const setLocalStorage: SetStor = (key: string, val: any) => {
	window.localStorage.setItem(key, JSON.stringify(val))
	return true
}
const getLocalStorage: getStor = (key: string) => {
	let val: string | null = null
	val = window.localStorage.getItem(key)
	return val && JSON.parse(val)
}
export { setLocalStorage, getLocalStorage }
