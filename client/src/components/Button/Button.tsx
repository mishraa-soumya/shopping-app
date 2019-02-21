import React from 'react';
import './Button.css';

export interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    cssClasses?: string;
}
const Button = (props: ButtonProps) => {
    let classNames = 'btn';
    if (props.cssClasses) {
        classNames = classNames+" "+props.cssClasses;
    }
    return (
        <button
            type="button"
            className={classNames}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    );
}

export default Button;