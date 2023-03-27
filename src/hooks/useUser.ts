import { IUser } from '../store/users/users.types'
import { useParams } from 'react-router-dom'

export function useUser(users: IUser[]): IUser | undefined {
	const { id } = useParams()
	const key = Number(id!) - 1
	return users[key]
}
