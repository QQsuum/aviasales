import React, { useEffect } from 'react'
import './app.scss'
import Header from '../header/header'
import Transplants from '../transplants/transplants'
import TicketsFilter from '../tickets-filter/tickets-filter'
import { fetchSearchId } from '../redux/async-actions'
import { useDispatch } from 'react-redux'
import TicketsList from '../tickets-list/tickets-list'
import ShowMoreTicketsBtn from '../show-more-tickets/show-more-tickets'
import Spinner from '../spinner/spinner'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => dispatch(fetchSearchId()), [])

	return (
		<div className='aviasales-app' style={{ padding: '0 103px' }}>
			<Header />
			<main className='main' style={{ display: 'flex', position: 'relative' }}>
				<Transplants />
				<div className='main-wrapper'>
					<TicketsFilter />

					<TicketsList />
					<Spinner />
					<ShowMoreTicketsBtn />
				</div>
			</main>
		</div>
	)
}
export default App
