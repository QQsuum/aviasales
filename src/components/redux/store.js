import {
	configureStore,
	createReducer,
	applyMiddleware,
	current,
} from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import reduxThunk from 'redux-thunk'

const initialState = {
	transplants: { checkedList: [], checkAll: false },
	ticketsData: [],
	showingList: [],
	filtredList: [],
	sortedList: [],
	currentList: [],
	searchId: null,
	ticketsOnPage: 5,
	loading: false,
}

const reducer = createReducer(initialState, (builder) => {
	const getItemsOnPage = (state) => {
		state.showingList = state.currentList.slice(0, state.ticketsOnPage)
	}
	const getCombinedFiltred = (state) => {
		state.currentList = state.filtredList.filter((el) =>
			current(state.sortedList).includes(el)
		)
		getItemsOnPage(state)
	}
	const getCombinedSorted = (state) => {
		state.currentList = current(state.sortedList).filter((e) =>
			current(state.filtredList).includes(e)
		)
		getItemsOnPage(state)
	}
	builder.addCase('CHANGE_TRANSPLANTS', (state, action) => {
		state.transplants = {
			checkedList: action.payload.checkedList,
			checkAll:
				action.payload.checkedList.length === 4
					? true
					: action.payload.checkAll,
		}
		let transplantsFilter = []
		if (state.transplants.checkedList.includes('one')) {
			transplantsFilter.push(1)
		}
		if (state.transplants.checkedList.includes('two')) {
			transplantsFilter.push(2)
		}
		if (state.transplants.checkedList.includes('three')) {
			transplantsFilter.push(3)
		}
		if (state.transplants.checkedList.includes('without')) {
			transplantsFilter.push(0)
		}
		if (state.transplants.checkedList.length === 0) {
			transplantsFilter.push(0, 1, 2, 3)
		}

		state.filtredList = current(state.ticketsData).filter(
			(item) =>
				transplantsFilter.includes(item.segments[0].stops.length) &&
				transplantsFilter.includes(item.segments[1].stops.length)
		)
		getCombinedFiltred(state)
	})
	builder.addCase('CHECK_ALL_TRANSPLANTS', (state, action) => {
		state.transplants = {
			checkedList: action.payload.checkedList,
			checkAll: action.payload.checkAll,
		}
		state.filtredList = state.sortedList
		state.currentList = state.filtredList
		state.showingList = state.currentList.slice(0, state.ticketsOnPage)
	})
	builder.addCase('GET_ID_KEY', (state, action) => {
		state.searchId = action.payload['searchId']
	})
	builder.addCase('GET_DEFAULT_TICKETS', (state, action) => {
		state.ticketsData.push(...action.payload.tickets)
		state.filtredList.push(...action.payload.tickets)
		state.sortedList.push(...action.payload.tickets)
		state.currentList.push(...action.payload.tickets)
		getItemsOnPage(state)
	})

	builder.addCase('SHOW_MORE_TICKETS', (state) => {
		state.showingList = [
			...state.showingList,
			...state.currentList.slice(
				state.ticketsOnPage,
				state.ticketsOnPage + state.ticketsOnPage
			),
		]
		state.ticketsOnPage += state.ticketsOnPage
	})

	builder.addCase('LOADING_ON', (state) => {
		state.loading = true
	})
	builder.addCase('LOADING_OFF', (state) => {
		state.loading = false
	})
	builder.addCase('SORT_BY_SPEED', (state) => {
		state.sortedList = state.ticketsData.sort(
			(prev, next) =>
				prev.segments[0].duration +
				prev.segments[1].duration -
				(next.segments[0].duration + next.segments[1].duration)
		)

		getCombinedSorted(state)
	})
	builder.addCase('SORT_BY_PRICE', (state) => {
		state.sortedList = state.ticketsData.sort(
			(prev, next) => prev.price - next.price
		)
		getCombinedSorted(state)
	})
	builder.addCase('SORT_BY_OPTIMAL', (state) => {
		state.sortedList = state.ticketsData.sort(
			(prev, next) =>
				prev.segments[0].duration +
				prev.segments[1].duration +
				prev.price -
				(next.segments[0].duration + next.segments[1].duration + next.price)
		)
		getCombinedSorted(state)
	})
})

const store = configureStore(
	{ reducer },
	composeWithDevTools(applyMiddleware(reduxThunk))
)

export default store
