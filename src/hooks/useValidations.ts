import { useEffect, useState } from 'react'
import { configValidations } from './configValidations'

export const useValidation = (value: string, title: string) => {
	const [isEmptyError, setIsEmptyError] = useState(true)
	const [minLengthError, setMinLengthError] = useState(false)
	const [maxLengthError, setMaxLengthError] = useState(false)
	const [isEmailError, setIsEmailError] = useState(true)

	useEffect(() => {
		const validations = configValidations(title)
		for (const validation in validations) {
			switch (validation) {
				case 'isEmpty':
					value ? setIsEmptyError(false) : setIsEmptyError(true)
					break
				case 'minLength':
					if (validations.minLength !== undefined) {
						value.length <= validations.minLength
							? setMinLengthError(true)
							: setMinLengthError(false)
					}
					break
				case 'maxLength':
					if (validations.maxLength !== undefined) {
						value.length >= validations.maxLength
							? setMaxLengthError(true)
							: setMaxLengthError(false)
					}
					break
				case 'isEmail':
					const emailRegExp =
						/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
					emailRegExp.test(String(value).toLowerCase())
						? setIsEmailError(false)
						: setIsEmailError(true)
					break
			}
		}
	}, [value])

	return {
		isEmptyError,
		minLengthError,
		maxLengthError,
		isEmailError,
	}
}
