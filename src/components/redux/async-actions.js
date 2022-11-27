import {
	getSearchId,
	getDefaultTickets,
	loadingOff,
	loadingOn,
} from './actions'

let searchId

export const fetchSearchId = () => {
	return (dispatch) => {
		dispatch(loadingOn())
		fetch('https://aviasales-test-api.kata.academy/search')
			.then((response) => response.json())
			.then((json) => {
				dispatch(getSearchId(json))
				return json
			})
			.then((json) => {
				searchId = json['searchId']
			})
			.then(() => dispatch(fetchGetTickets()))
	}
}

export const fetchGetTickets = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
			)
			if (!response.ok) {
				throw new Error()
			}
			const json = await response.json()
			dispatch(getDefaultTickets(json))
			dispatch(loadingOff())
			if (json.stop != true) {
				return dispatch(fetchGetTickets())
			}
		} catch {
			dispatch(fetchGetTickets())
		}
	}
}
