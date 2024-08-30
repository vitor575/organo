import "./Form.css"
import TextField from "../TextField";
import List from "../List";
import Button from "../Button";
import { useState } from "react";


const Form = (props) => {

    const onSave = (event) => {
        event.preventDefault();
        props.newColaborator({
            nome,
            cargo,
            time,
            imagem
        });
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    return (
        <section className="Form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    obrigatorio="true" 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <TextField obrigatorio="true"
                     label="Cargo" 
                     placeholder="Digite o seu cargo" 
                     valor={cargo}
                     aoAlterado={valor => setCargo(valor)}/>
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}/>
                <List 
                label="Times"
                itens={props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;