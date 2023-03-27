import React from 'react'
import ReactLoading from 'react-loading'
import './loader.scss'

const Loader = () => {
	return (
		<ReactLoading
			className='loader'
			type={'spin'}
			color={'#bdbdbd'}
			width={'180px'}
		/>
	)
}

export default Loader
