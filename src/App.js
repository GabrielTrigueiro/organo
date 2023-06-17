import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div>
      <Banner/>
      <CampoTexto label="Nome" placeHolder="Digite seu nome"/>
      <CampoTexto label="Cargo"  placeHolder="Digite seu cargo"/>
      <CampoTexto label="Imagem"  placeHolder="Digite o endereço da sua imagem"/>
      <CampoTexto label="Time"  placeHolder="Digite seu time"/>
    </div>
  );
}

export default App;
