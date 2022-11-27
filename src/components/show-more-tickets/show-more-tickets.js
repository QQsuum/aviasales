import React from 'react'
import classes from './show-more-tickets.module.scss'
import { showMoreTickets } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const ShowMoreTicketsBtn = () => {
	const dispatch = useDispatch()
	const ticketsData = useSelector((store) => store.ticketsData)

	return ticketsData.length < 5 ? null : (
		<button
			type='button'
			className={classes['button']}
			onClick={() => dispatch(showMoreTickets())}
		>
			Показать еще 5 билетов!
		</button>
	)
}
export default ShowMoreTicketsBtn
