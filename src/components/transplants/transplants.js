import React from 'react'
import classes from './transplants.module.scss'
import { Checkbox, Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
	changeCheckedTransplants,
	checkAllTransplants,
	getCurrentList,
} from '../redux/actions'

const Transplants = () => {
	const dispatch = useDispatch()
	const { checkedList, checkAll } = useSelector((state) => state.transplants)

	const onChange = (list) => {
		const payload = {
			checkedList: list,
			checkAll: list.length === checkedList.length,
		}
		dispatch(changeCheckedTransplants(payload))
	}

	const onAllChecked = (e) => {
		const allValues = ['all', 'without', 'one', 'two', 'three']
		const checkedList = e.target.checked ? allValues : []
		const payload = { checkedList, checkAll: e.target.checked }
		dispatch(checkAllTransplants(payload))
	}
	return (
		<div className={classes['transplants']}>
			<h2 className={classes['title']}>количество пересадок</h2>
			<div className={classes['list']}>
				<div className={classes['item']}>
					<Checkbox
						onChange={onAllChecked}
						checked={checkAll}
						value='all'
						style={{ display: 'flex' }}
					>
						<div className='checkbox-label' style={{ marginLeft: '10px' }}>
							{' '}
							Все
						</div>
					</Checkbox>
				</div>
				<Checkbox.Group
					style={{
						width: '100%',
					}}
					onChange={onChange}
					value={checkedList}
				>
					<Row style={{ display: 'flex', flexDirection: 'column' }}>
						<div className={classes['item']}>
							<Col className={classes['andt-checkbox-wrapper']}>
								<Checkbox
									className={classes['andt-checkbox-wrapper']}
									value='without'
									style={{ display: 'flex' }}
								>
									<div
										className='checkbox-label'
										style={{ marginLeft: '10px' }}
									>
										{' '}
										Без пересадок
									</div>
								</Checkbox>
							</Col>
						</div>
						<div className={classes['item']}>
							<Col className={classes['andt-checkbox-wrapper']}>
								<Checkbox
									className={classes['andt-checkbox-wrapper']}
									value='one'
									style={{ display: 'flex' }}
								>
									<div
										className='checkbox-label'
										style={{ marginLeft: '10px' }}
									>
										{' '}
										1 пересадка
									</div>
								</Checkbox>
							</Col>
						</div>
						<div className={classes['item']}>
							<Col className={classes['andt-checkbox-wrapper']}>
								<Checkbox
									className={classes['andt-checkbox-wrapper']}
									value='two'
									style={{ display: 'flex' }}
								>
									<div
										className='checkbox-label'
										style={{ marginLeft: '10px' }}
									>
										2 пересадки
									</div>
								</Checkbox>
							</Col>
						</div>
						<div className={classes['item']}>
							<Col>
								<Checkbox
									className={classes['andt-checkbox-wrapper']}
									value='three'
									style={{ display: 'flex' }}
								>
									<div
										className='checkbox-label'
										style={{ marginLeft: '10px' }}
									>
										{' '}
										3 пересадки
									</div>
								</Checkbox>
							</Col>
						</div>
					</Row>
				</Checkbox.Group>
			</div>
		</div>
	)
}
export default Transplants
