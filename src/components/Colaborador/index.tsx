import './Colaborador.css';
import { TiDelete } from "react-icons/ti";

interface colaboradorProps {
    nome:string
    imagem:string
    cargo:string
    corDeFundo:string
    aoDeletar: () => void
}

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar}:colaboradorProps) => {
    return (
        <div className="colaborador">
            <TiDelete size={20} className='deletar' onClick={aoDeletar}/>
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>


            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
    )
};

export default Colaborador;