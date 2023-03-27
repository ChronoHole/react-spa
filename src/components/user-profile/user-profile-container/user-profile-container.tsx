import React, { FC, useRef, useState } from 'react'
import { useUser } from '../../../hooks/useUser'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import ButtonMain from '../../ui/buttons/button-main'
import PageWrongUserID from '../../../pages/wrong-user-id'
import './user-profile-container.scss'
import UserProfileForm from '../user-profile-form/user-profile-form'
import { UserTitle } from '../../../store/users/users.types'

const UserProfileContainer: FC = () => {
	const { users } = useTypedSelector(state => state.users)
	const user = useUser(users)
	const [readable, setReadable] = useState(true)
	const profileForm = useRef<HTMLDivElement>(null)

	const submitData = () => {
		const form = profileForm.current
		const inputData = form?.querySelectorAll('input').forEach(item => {
			console.log(`${item.title}: ${item.value}`)
		})

		// console.log(`${item.title}: ${item.value}`)
	}
	if (!user) {
		return <PageWrongUserID />
	}
	return (
		<div className='user-profile-container'>
			<span className='user-profile-header'>
				<h1 className='user-profile-label'>Профиль пользователя</h1>
				<ButtonMain
					className='btn-profile-edit'
					handleClick={() => setReadable(!readable)}
				>
					Редактировать
				</ButtonMain>
			</span>
			<div ref={profileForm} className='user-profile-form'>
				<UserProfileForm
					title={UserTitle.NAME}
					text={user.name}
					readOnly={readable}
				/>
				<UserProfileForm
					title={UserTitle.USERNAME}
					text={user.username}
					readOnly={readable}
				/>
				<UserProfileForm
					title={UserTitle.EMAIL}
					text={user.email}
					readOnly={readable}
				/>
				<UserProfileForm
					title={UserTitle.STREET}
					text={user.address.street}
					readOnly={readable}
				/>
				<UserProfileForm
					title={UserTitle.CITY}
					text={user.address.city}
					readOnly={readable}
				/>
				<UserProfileForm
					title={UserTitle.ZIP_CODE}
					text={user.address.zipcode}
					readOnly={readable}
				/>
				<UserProfileForm
					title={UserTitle.PHONE}
					text={user.phone}
					readOnly={readable}
				/>
				<UserProfileForm
					title={UserTitle.WEBSITE}
					text={user.website}
					readOnly={readable}
				/>
				<label className='data-title'>Comment</label>
				<textarea className='data-field' readOnly={readable}></textarea>
			</div>
			<ButtonMain
				className='btn-submit'
				disabled={readable}
				handleClick={() => submitData()}
			>
				Отправить
			</ButtonMain>
		</div>
	)
}

export default UserProfileContainer
