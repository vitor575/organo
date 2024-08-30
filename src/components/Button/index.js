import './Button.css';

const Button = (props) => {
    return (
        <div className="Button">
            <button >{props.children}</button>
        </div>
    )
}

export default Button;