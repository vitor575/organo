import { ReactElement } from 'react';
import './Button.css';

interface BotaoProps {
    children: ReactElement | string
};

const Button = (props: BotaoProps) => {
    return (
        <div className="Button">
            <button >{props.children}</button>
        </div>
    )
}

export default Button;