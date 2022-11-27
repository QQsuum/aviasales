import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortByOptimal, sortByPrice, sortBySpeed } from '../redux/actions'
import classes from './tickets-filter.module.scss'
const TicketsFilter = () => {
	const [checkedFilter, setCheckedFilter] = useState(null)
	const dispatch = useDispatch()
	const onTicketsSort = (e) => {
		setCheckedFilter(e.target.id)

		switch (e.target.id) {
			case 'bestPrice':
				dispatch(sortByPrice())
				break
			case 'bestSpeed':
				dispatch(sortBySpeed())
				break
			case 'optimal':
				dispatch(sortByOptimal())
				break
		}
	}

	// const itemClass =
	// 	checkedFilter == id ? classes['item-active'] : classes['item']
	return (
		<ul className={classes['list']}>
			<li
				id='bestPrice'
				className={
					checkedFilter == 'bestPrice'
						? classes['item-active'] 
						: classes['item']
				}
				onClick={onTicketsSort}
			>
				самый дешевый
			</li>
			<li
				className={
					checkedFilter == 'bestSpeed'
						? classes['item-active']
						: classes['item']
				}
				id='bestSpeed'
				onClick={onTicketsSort}
			>
				самый быстрый
			</li>
			<li
				className={
					checkedFilter == 'optimal' ? classes['item-active'] : classes['item']
				}
				id='optimal'
				onClick={onTicketsSort}
			>
				оптимальный
			</li>
		</ul>
	)
}
export default TicketsFilter
