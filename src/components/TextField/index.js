import "./TextField.css";

const TextField = (props) => {

    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} onChange={aoDigitar} type="text" placeholder={props.placeholder} />
        </div>
    ); 
};

export default TextField;