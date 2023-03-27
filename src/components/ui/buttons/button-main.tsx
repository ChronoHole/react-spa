import React, { ReactNode } from 'react'
import './button-main.scss'

interface ButtonMainProps {
	handleClick: () => void
	children: ReactNode
	className?: string
	disabled?: boolean
}

const ButtonMain = ({
	className,
	children,
	handleClick,
	disabled,
}: ButtonMainProps) => {
	return (
		<button className={className} onClick={handleClick} disabled={disabled}>
			{children}
		</button>
	)
}

export default ButtonMain
