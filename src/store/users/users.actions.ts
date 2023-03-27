import { Dispatch } from 'redux'
import { UsersAction, UsersActionTypes } from './users.types'
import axios from 'axios'

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UsersAction>) => {
		try {
			dispatch({ type: UsersActionTypes.FETCH_USERS })
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users?_limit=2'
			)
			setTimeout(() => {
				dispatch({
					type: UsersActionTypes.FETCH_USERS_SUCCESS,
					payload: response.data,
				})
			}, 500)
		} catch (error) {
			dispatch({
				type: UsersActionTypes.FETCH_USERS_ERROR,
				payload: 'Ошибка загрузки пользователей',
			})
		}
	}
}
