export interface ParamsState {
	sortType: ParamsSortTypes
}

export enum ParamsSortTypes {
	BY_ID = 'BY_ID',
	BY_CITY = 'BY_CITY',
	BY_COMPANY = 'BY_COMPANY',
}

export enum ParamsActionsTypes {
	CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE',
}

interface ChangeSortTypeAction {
	type: ParamsActionsTypes.CHANGE_SORT_TYPE
	payload: ParamsSortTypes
}

export type ParamsAction = ChangeSortTypeAction
