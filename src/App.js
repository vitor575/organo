import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import { useState } from "react";


function App(props) {

  const times = [
  {
    nome: "Programação",
    corPrimaria: "#57C278",
    corSecundaria: "#D9F7D9"
  },
  {
    nome: "Front-end",
    corPrimaria: "#82CFFA",
    corSecundaria: "#E8F8FF"
  },
  {
    nome: "Data Science",
    corPrimaria: "#A6D157",
    corSecundaria: "#F0F8E2"
  },
  {
    nome: "Devops",
    corPrimaria: "#E06869",
    corSecundaria: "#FDE7E8"
  },
  {
    nome: "UX e Design",
    corPrimaria: "#DB6EBF",
    corSecundaria: "#FAE9F5"
  },
  {
    nome: "Mobile",
    corPrimaria: "#FFBA05",
    corSecundaria: "#FFF5D9"
  },
  {
    nome: "inovação e Gestão",
    corPrimaria: "#FF8A29",
    corSecundaria: "#FFEEDF"
  },
]

  const [colaborators, setColaborators] = useState([]);

  const showColaborator = (colaborator) => {
    setColaborators([...colaborators, colaborator])
  };

  return (
    <div className="App">
      <header>
        <Banner/>
      </header>
      <Form times={times.map(time => time.nome)} newColaborator= {colaborator => showColaborator(colaborator)}/>


    {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}


    </div>
  );
}

export default App;
