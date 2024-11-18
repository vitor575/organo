import "./Form.css"
import TextField from "../TextField";
import List from "../List";
import Button from "../Button";
import { useState } from "react";
import { IColaborator } from "../../shared/interface/IColaborator";

interface formProps {
    newColaborator:(colaborator:IColaborator) => void
    times:string[]
}


const Form = ({newColaborator, times }:formProps) => {

    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        newColaborator({
            nome,
            cargo,
            imagem,
            time
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
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
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    aoAlterado={valor => setNome(valor)}
                    />
                <TextField obrigatorio={true}
                     label="Cargo" 
                     placeholder="Digite o seu cargo" 
                     aoAlterado={valor => setCargo(valor)}/>
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da sua imagem"
                    aoAlterado={valor => setImagem(valor)}/>
                <List 
                label="Times"
                itens={times} 
                valor={time}
                obrigatorio={true}
                aoAlterado={valor => setTime(valor)}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;