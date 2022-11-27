export const changeCheckedTransplants = (payload) => ({
	type: 'CHANGE_TRANSPLANTS',
	payload,
})

export const checkAllTransplants = (payload) => ({
	type: 'CHECK_ALL_TRANSPLANTS',
	payload,
})

export const getSearchId = (json) => ({
	type: 'GET_ID_KEY',
	payload: json,
})
export const getDefaultTickets = (json) => ({
	type: 'GET_DEFAULT_TICKETS',
	payload: json,
})
export const getCurrentList = () => ({
	type: 'GET_CURRENT_LIST',
})
export const showMoreTickets = () => ({
	type: 'SHOW_MORE_TICKETS',
})

export const loadingOn = () => ({
	type: 'LOADING_ON',
})
export const loadingOff = () => ({
	type: 'LOADING_OFF',
})
export const sortByPrice = ()=>({
	type: 'SORT_BY_PRICE'
})
export const sortBySpeed = ()=>({
	type: 'SORT_BY_SPEED'
})
export const sortByOptimal = ()=>({
	type: 'SORT_BY_OPTIMAL'
})
