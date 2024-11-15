import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import { useState } from "react";


function App(props) {

  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57C278",
    },
    {
      nome: "Front-end",
      cor: "#82CFFA"
    },
    {
      nome: "Data Science",
      cor: "#A6D157"
    },
    {
      nome: "Devops",
      cor: "#E06869"
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF"
    },
    {
      nome: "Mobile",
      cor: "#FFBA05"
    },
    {
      nome: "inovação e Gestão",
      cor: "#FF8A29"  
    },
  ]);

  const [colaborators, setColaborators] = useState([]);

  const createColaborator = (colaborator) => {
    setColaborators([...colaborators, colaborator]);
  };

  const deletarColaborador = () => {
    console.log("deletando");
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.cor = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <header>
        <Banner enderecoImagem='./imagens/banner.png'/>
      </header>
      <Form times={times.map(time => time.nome)} newColaborator={colaborator => createColaborator(colaborator)} />


      {times.map(time => <Time
        mudarCor={mudarCorDoTime}
        aoDeletar={deletarColaborador}
        key={time.nome}
        nome={time.nome}
        cor={time.cor}
        colaborators={colaborators.filter(colaborador => colaborador.time === time.nome)} />)}


    </div>
  );
}

export default App;
