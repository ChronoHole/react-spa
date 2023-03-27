import React, { FC } from 'react'
import ButtonMain from '../../components/ui/buttons/button-main'
import { useParamsActions } from '../../hooks/useParamsActions'
import { ParamsSortTypes } from '../../store/params/params.types'
import './sidebar.scss'

const Sidebar: FC = () => {
	const { ChangeSortType } = useParamsActions()
	return (
		<div className='sidebar'>
			<h2 className='sort-label'>Сортировка</h2>
			<ButtonMain
				className='btn-sort'
				handleClick={() => {
					ChangeSortType(ParamsSortTypes.BY_CITY)
				}}
			>
				по городу
			</ButtonMain>
			<ButtonMain
				className='btn-sort'
				handleClick={() => {
					ChangeSortType(ParamsSortTypes.BY_COMPANY)
				}}
			>
				по компаниям
			</ButtonMain>
		</div>
	)
}

export default Sidebar
