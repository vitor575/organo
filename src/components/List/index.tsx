import './List.css';

interface listProps {
    aoAlterado: (valor: string) => void
    label:string
    obrigatorio: boolean
    valor:string
    itens: string[]
}

const List = ({label, aoAlterado, obrigatorio, itens, valor}:listProps) => {
    return (
        <div className="List">
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default List;