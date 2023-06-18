import './Colaborador.css'

const Colaborador = ({imagem, nome, cargo, cor}) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: cor }}>
        <img src={imagem} alt={'imagem do colaborador'}/>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
 
export default Colaborador;