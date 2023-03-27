import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UsersActionCreators from '../store/users/users.actions'

export const useUsersActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(UsersActionCreators, dispatch)
}
