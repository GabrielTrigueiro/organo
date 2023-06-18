import { useCallback, useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/Index';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = useCallback((colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  },[colaboradores])

  return (
    <div>
      <Banner />  
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/> 
    </div>
  );
}

export default App;
