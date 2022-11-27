import React from 'react'
import classes from './ticket.module.scss'
import add from 'date-fns/add'
import { format } from 'date-fns'

const Ticket = (props) => {
	const { origin: departureOriginCity } = props.segments[0]
	const { destination: departureDestinationCity } = props.segments[0]
	const { origin: arrivalOriginCity } = props.segments[1]
	const { destination: arrivalDestinationCity } = props.segments[1]
	const companyLogo = `http://pics.avs.io/99/36/${props.carrier}.png`

	const departureOriginTime = format(
		new Date(props.segments[0].date),
		"HH':'mm"
	)

	const departureDestinationTime = format(
		new Date(
			add(new Date(props.segments[0].date), {
				minutes: props.segments[0].duration,
			})
		),
		"HH':'mm"
	)

	const arrivalOriginTime = format(new Date(props.segments[1].date), "HH':'mm")

	const arrivalDestinationTime = format(
		new Date(
			add(new Date(props.segments[1].date), {
				minutes: props.segments[1].duration,
			})
		),
		"HH':'mm"
	)

	const createTravelTime = (ind) => {
		return `${Math.floor(props.segments[ind].duration / 60)}ч ${
			props.segments[ind].duration % 60
		}м`
	}

	const createStopsCount = (ind) => {
		const count = props.segments[ind].stops
		switch (true) {
			case count.length == 0:
				return 'Без пересадок'
			case count.length == 1:
				return '1 пересадка'
			case count.length > 1:
				return `${count.length} пересадки`
		}
	}
	const departureTravelTime = createTravelTime(0)
	const arrivalTravelTime = createTravelTime(1)
	const departureStops = createStopsCount(0)
	const arrivalStops = createStopsCount(1)
	const departureStopsCities = props.segments[0].stops.join(' - ')
	const arrivalStopsCities = props.segments[1].stops.join(' - ')

	const price = String(props.price)
		.split('')
		.reverse()
		.slice(0, 3)
		.concat(' ', String(props.price).split('').reverse().slice(3))
		.reverse()
	
	return (
		<div className={classes['ticket']}>
			<div className={classes['header']}>
				<div className={classes['price']}>{price} Р</div>
				<img style={{ width: '110px', height: '36px' }} src={companyLogo} />
			</div>

			{/* <div className={classes['main']}>
				<div className={classes['main-top-wrapper']}>
					<div className={classes['departure']}>
						<div className={classes['departure-city']}>
							{departureOriginCity} - {departureDestinationCity}
						</div>
						<div className={classes['departure-time']}>
							{departureOriginTime} - {departureDestinationTime}
						</div>
					</div>
					<div className={classes['travel-time']}>
						<div className={classes['travel-time-title']}>в пути</div>
						<div className={classes['travel-time-total']}>
							{departureTravelTime}
						</div>
					</div>
					<div className={classes['transplants']}>
						<div className={classes['transplants-count']}>{departureStops}</div>
						<div className={classes['transplants-cities']}>
							{departureStopsCities}
						</div>
					</div>
				</div>

				<div className={classes['main-bottom-wrapper']}>
					<div className={classes['departure']}>
						<div className={classes['departure-city']}>
							{arrivalOriginCity}- {arrivalDestinationCity}
						</div>
						<div className={classes['departure-time']}>
							{arrivalOriginTime} - {arrivalDestinationTime}
						</div>
					</div>
					<div className={classes['travel-time']}>
						<div className={classes['travel-time-title']}>в пути</div>
						<div className={classes['travel-time-total']}>
							{arrivalTravelTime}
						</div>
					</div>
					<div className={classes['transplants']}>
						<div className={classes['transplants-count']}>{arrivalStops}</div>
						<div className={classes['transplants-cities']}>
							{arrivalStopsCities}
						</div>
					</div>
				</div>
			</div> */}
			<div className={classes['main']}>
				<div className={classes['flight']}>
					<div className={classes['departure-city']}>
						{departureOriginCity} - {departureDestinationCity}
					</div>
					<div className={classes['departure-time']}>
						{departureOriginTime} - {departureDestinationTime}
					</div>

					<div className={classes['departure-city']}>
						{arrivalOriginCity}- {arrivalDestinationCity}
					</div>
					<div className={classes['departure-time']}>
						{arrivalOriginTime} - {arrivalDestinationTime}
					</div>
				</div>

				<div className={classes['travel-time']}>
					<div className={classes['travel-time-title']}>в пути</div>
					<div className={classes['travel-time-total']}>
						{departureTravelTime}
					</div>
					<div className={classes['travel-time-title']}>в пути</div>
					<div className={classes['travel-time-total']}>
						{arrivalTravelTime}
					</div>
				</div>

				<div className={classes['transplants']}>
					<div className={classes['transplants-count']}>{departureStops}</div>
					<div className={classes['transplants-cities']}>
						{departureStopsCities}
					</div>
					<div className={classes['transplants-count']}>{arrivalStops}</div>
					<div className={classes['transplants-cities']}>
						{arrivalStopsCities}
					</div>
				</div>
			</div>

			
		</div>
	)
}
export default Ticket
