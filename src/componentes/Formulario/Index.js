import { useCallback, useState } from 'react';

import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSupsensa from '../ListaSuspensa/Index';
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = useCallback((evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  },[nome,cargo,imagem,time,props])

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={valor => setNome(valor)}
          obrigatorio
          label="Nome"
          placeHolder="Digite seu nome" />
        <CampoTexto
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          obrigatorio
          label="Cargo"
          placeHolder="Digite seu cargo" />
        <CampoTexto
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          label="Imagem"
          placeHolder="Digite o endereço da sua imagem" />
        <ListaSupsensa
          aoAlterado={valor => setTime(valor)}
          valor={time}
          obrigatorio
          label={"Times"}
          itens={props.times} />
        <Botao>
          Criar um card
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;