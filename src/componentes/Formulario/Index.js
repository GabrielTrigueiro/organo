import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeHolder="Digite seu nome" />
        <CampoTexto label="Cargo" placeHolder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeHolder="Digite o endereço da sua imagem" />
        <CampoTexto label="Time" placeHolder="Digite seu time" />
      </form>
    </section>
  );
}

export default Formulario;