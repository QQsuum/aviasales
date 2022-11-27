import React from 'react'
import { useSelector } from 'react-redux'
import Ticket from '../ticket/ticket'
import classes from './tickets-list.module.scss'

const TicketsList = () => {
	const createId = () => {
		return Math.pow(Math.random(), Math.random()) * 100
	}
	const ticketsData = useSelector((store) => store.showingList)
	const tickets = ticketsData.map((ticket) => {
		const { ...ticketProps } = ticket
		const id = createId()

		return (
			<li key={id} className={classes['item']}>
				<Ticket {...ticketProps} />
			</li>
		)
	})
	return <>{tickets}</>
}
export default TicketsList
