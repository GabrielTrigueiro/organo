import './CampoTexto.css'

const CampoTexto = ({label, placeHolder, obrigatorio}) => {

  let valor = ''

  const aoDigitado = (evento) => {
    console.log(evento.target.value)
    valor = evento.target.value
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeHolder}
      />
    </div>
  );
}
 
export default CampoTexto;