import React from 'react'
import { useSelector } from 'react-redux'
import { PropagateLoader } from 'react-spinners'

const Spinner = () => {
	const loading = useSelector((store) => store.loading)
	return (
		<PropagateLoader
			color='#2196f3'
			loading={loading}
			size={15}
			style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}
		/>
	)
}
export default Spinner
