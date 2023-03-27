import { useState } from 'react'
import { useValidation } from './useValidations'

export const useInput = (initialValue: any, title: any) => {
	const [value, setValue] = useState(initialValue)
	const [isDirty, setDirty] = useState(false)
	const valid = useValidation(value, title)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDirty(true)
	}

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid,
	}
}
