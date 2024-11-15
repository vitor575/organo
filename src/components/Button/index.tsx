import { ReactElement } from 'react';
import './Button.css';
import React from 'react';

interface BotaoProps {
    children: ReactElement
};

const Button = (props: BotaoProps) => {
    return (
        <div className="Button">
            <button >{props.children}</button>
        </div>
    )
}

export default Button;