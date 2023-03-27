import React, { FC, useState } from 'react'
import UserListForm from '../user-list-form/user-list-form'
import './user-list-container.scss'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ParamsSortTypes } from '../../../store/params/params.types'

const UserListContainer: FC = () => {
	const { users } = useTypedSelector(state => state.users)
	const { sortType } = useTypedSelector(state => state.params)
	const sortedUsers = [...users].sort((prevUser, nextUser) => {
		if (sortType === ParamsSortTypes.BY_ID) {
			return prevUser.id > nextUser.id ? 1 : -1
		}
		if (sortType === ParamsSortTypes.BY_CITY) {
			return prevUser.address.city > nextUser.address.city ? 1 : -1
		}
		if (sortType === ParamsSortTypes.BY_COMPANY) {
			return prevUser.company.name > nextUser.company.name ? 1 : -1
		}
		return 0
	})

	return (
		<div className='user-list-container'>
			<span className='user-list-header'>
				<h1 className='user-list-label'>Список пользователей</h1>
				<select className='select-filter' value=''>
					<option disabled={true} value=''>
						Сортировка
					</option>
					<option value='apple'>по id 🍏</option>
					<option value='banana'>по городу 🍌</option>
					<option value='kiwi'>по имени 🥝</option>
				</select>
			</span>
			{sortedUsers.map(user => (
				<UserListForm
					key={user.id}
					id={user.id}
					name={user.name}
					city={user.address.city}
					company={user.company.name}
				/>
			))}
			<p className='user-list-count'>
				Количество найденных пользователей: {users.length}
			</p>
		</div>
	)
}

export default UserListContainer
