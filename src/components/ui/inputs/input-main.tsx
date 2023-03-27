import React, { FC, InputHTMLAttributes } from 'react'
import { useInput } from '../../../hooks/useInput'
import './input-main.scss'

interface InputMainProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string
	text: string | number
	readOnly: boolean
}

const InputMain: FC<InputMainProps> = ({ title, text, readOnly }) => {
	const inputMain = useInput(text, title)

	return (
		<input
			className='input-main'
			title={title}
			readOnly={readOnly}
			onChange={event => inputMain.onChange(event)}
			onBlur={event => inputMain.onBlur(event)}
			value={inputMain.value}
		/>
	)
}

export default InputMain
