import CampoTexto from '../CampoTexto';
import ListaSupsensa from '../ListaSuspensa/Index';
import './Formulario.css'

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Designe',
    'Mobile',
    'Inovação e Gestão',
  ]

  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeHolder="Digite seu nome" />
        <CampoTexto label="Cargo" placeHolder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeHolder="Digite o endereço da sua imagem" />
        <ListaSupsensa label={"Times"} itens={times}/>
      </form>
    </section>
  );
}

export default Formulario;