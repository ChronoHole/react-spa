import { FC } from 'react'
import InputMain from '../../ui/inputs/input-main'

interface UserProfileFormProps {
	title: string
	text: string | number
	readOnly: boolean
	type?: string
}

const UserProfileForm: FC<UserProfileFormProps> = ({
	title,
	text,
	readOnly,
	type,
}) => {
	return (
		<>
			<label className='data-title'>{title}</label>
			<InputMain title={title} text={text} readOnly={readOnly} type={type} />
		</>
	)
}

export default UserProfileForm
