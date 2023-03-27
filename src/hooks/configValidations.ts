import { UserTitle } from '../store/users/users.types'

export const configValidations = (title: any) => {
	let validations = {
		checkEmpty: true,
    minLength: undefined,
    maxLength: undefined,
	}
	switch (title) {
		case UserTitle.NAME:
			break
		case UserTitle.USERNAME:
      validations = Object.assign(validations, {minLength: 5})
			break
		case UserTitle.EMAIL:
			validations = Object.assign(validations, {checkEmail: true})
			break
		case UserTitle.STREET:
			break
		case UserTitle.CITY:
			break
		case UserTitle.ZIP_CODE:
			break
		case UserTitle.PHONE:
			break
		case UserTitle.WEBSITE:
			break
		default:
	}
	return validations
}
