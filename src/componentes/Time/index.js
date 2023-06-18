import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {

  const css = {
    backgroundColor: props.time.corSecundaria
  }

  return (
    <section
      className='time'
      style={css}
    >
      <h3 style={{borderColor: props.time.corPrimaria}}>{props.time.nome}</h3>
    </section>
  );
}

export default Time;