interface ICompany {
	name: string
}

interface IAddress {
	street: string
	city: string
	zipcode: number
}

export interface IUser {
	id: number
	name: string
	username: string
	email: string
	address: IAddress
	phone: string
	website: string
	company: ICompany
}

export enum UserTitle {
	NAME = 'Name',
	USERNAME = 'Username',
	EMAIL = 'E-mail',
	STREET = 'Street',
	CITY = 'City',
	ZIP_CODE = 'Zip code',
	PHONE = 'Phone',
	WEBSITE = 'Website',
}

export type SortType = 'ByCity' | 'ByCompany' | null

export interface UsersState {
	users: IUser[]
	loading: boolean
	error: null | string
}

export enum UsersActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
	type: UsersActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
	type: UsersActionTypes.FETCH_USERS_SUCCESS
	payload: IUser[]
}

interface FetchUsersErrorAction {
	type: UsersActionTypes.FETCH_USERS_ERROR
	payload: string
}

export type UsersAction =
	| FetchUsersAction
	| FetchUsersSuccessAction
	| FetchUsersErrorAction
