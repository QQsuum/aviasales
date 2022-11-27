import React from 'react'
import plane from './images/plane-icon.png'
import classes from './header.module.scss'
const Header = () => {
	return (
		<div className={classes['header']}>
			<img src={plane} style={{ height: '60px', width: '60px' }} />
		</div>
	)
}
export default Header
