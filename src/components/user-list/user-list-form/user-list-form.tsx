import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './user-list-form.scss'

interface UserListFormProps {
	id: number
	name: string
	city: string
	company: string
}

interface UserListFormDataProps {
	title: string
	data: string
	children?: React.ReactNode
}

const UserData: FC<UserListFormDataProps> = ({ title, data, children }) => {
	return (
		<div className='user-data'>
			<span className='title'>{title}: </span>
			<span className='data'>{data}</span>
			{children}
		</div>
	)
}

const UserListForm: FC<UserListFormProps> = ({ name, city, company, id }) => {
	return (
		<div className='user-list-form'>
			<UserData title={'ФИО'} data={name} />
			<UserData title={'город'} data={city} />
			<UserData title={'компания'} data={company}>
				<Link to={`/profile/${id}`} className='detail-link'>
					Подробнее
				</Link>
			</UserData>
		</div>
	)
}

export default UserListForm
