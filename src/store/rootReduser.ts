import { paramsReduser } from './params/params.reduser'
import { combineReducers } from 'redux'
import { usersReduser } from './users/users.reduser'

export const rootReduser = combineReducers({
	users: usersReduser,
	params: paramsReduser,
})

export type RootState = ReturnType<typeof rootReduser>
