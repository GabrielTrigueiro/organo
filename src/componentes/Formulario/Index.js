import { useCallback } from 'react';
import Botao from '../Botao';
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

  const aoSalvar = useCallback((evento) => {
    evento.preventDefault()
    console.log("form foi submetido")
  }, [])

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio label="Nome" placeHolder="Digite seu nome" />
        <CampoTexto obrigatorio label="Cargo" placeHolder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeHolder="Digite o endereço da sua imagem" />
        <ListaSupsensa obrigatorio label={"Times"} itens={times}/>
        <Botao>
          Criar um card
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;