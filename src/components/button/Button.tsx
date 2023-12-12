import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
    title: string,
    variant: 'primary' |'secondary',
    Icon: any
}

const defaultClassName = 'bg-dark text-white py-3 px-7 rounded-md flex items-center justify-center'

export const Button = ({Icon, title, variant}: ButtonProps) => {

    if(variant === 'primary') return (
        <button className={`${defaultClassName} bg-red`}>
            {Icon}
            {title}
        </button>
    )

    return <button>{title}</button>
}