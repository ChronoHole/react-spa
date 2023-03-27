import { ParamsState, ParamsAction, ParamsSortTypes } from './params.types'

const initialState: ParamsState = {
	sortType: ParamsSortTypes.BY_ID,
}

export const paramsReduser = (
	state = initialState,
	action: ParamsAction
): ParamsState => {
	switch (action.type) {
		case 'CHANGE_SORT_TYPE':
			return { sortType: action.payload }
		default:
			return state
	}
}
