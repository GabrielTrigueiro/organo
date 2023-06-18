import Colaborador from '../Colaborador';
import './Time.css'

const Time = ({ colaborador, time }) => {

  const css = {
    backgroundColor: time.corSecundaria
  }

  if(colaborador.length === 0){
    return null
  }

  return (
    <section
      className='time'
      style={css}
    >
      <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
      <div className='colaboradores'>
        {colaborador.map((item) => (
          <Colaborador
            key={item.nome}
            cargo={item.cargo}
            imagem={item.imagem}
            nome={item.nome}
            cor={time.corPrimaria}
          />
        ))}
      </div>
    </section>
  );
}

export default Time;