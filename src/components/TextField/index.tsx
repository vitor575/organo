import "./TextField.css";

interface textFieldProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label:string
    obrigatorio?:boolean
}

const TextField = ({aoAlterado, label, placeholder, obrigatorio = false}:textFieldProps) => {

    const aoDigitar = (e:React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input required={obrigatorio} onChange={aoDigitar} type="text" placeholder={placeholder} />
        </div>
    ); 
};

export default TextField;