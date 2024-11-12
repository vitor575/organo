import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

const Time = ({colaborators, nome, cor, aoDeletar, mudarCor}) => {
    
    return (
        (colaborators.length > 0) ? 
        <section className="time" style={{backgroundColor: hexToRgba(cor, "0.6")}}>
            <input onChange={evento => mudarCor(evento.target.value, nome)} value={cor} type="color" className='input-cor' />
            <h3 style={{borderColor: cor}}>{nome}</h3>
            <div className="colaboradores">
                {colaborators.map(colaborator => <Colaborador aoDeletar={aoDeletar} corDeFundo={cor} key={colaborator.nome} nome={colaborator.nome} cargo={colaborator.cargo} imagem={colaborator.imagem}/>)}
            </div>
        </section>
        : ''
    )
};

export default Time;