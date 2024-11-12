import './Colaborador.css';
import { TiDelete } from "react-icons/ti";

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar}) => {
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