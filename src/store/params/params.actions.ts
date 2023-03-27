import { Dispatch } from 'redux'
import {
	ParamsAction,
	ParamsSortTypes,
	ParamsActionsTypes,
} from './params.types'

export const ChangeSortType = (sortType: ParamsSortTypes) => {
	return (dispatch: Dispatch<ParamsAction>) => {
		dispatch({
			type: ParamsActionsTypes.CHANGE_SORT_TYPE,
			payload: sortType,
		})
	}
}
