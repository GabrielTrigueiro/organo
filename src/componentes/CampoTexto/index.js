import './CampoTexto.css'

const CampoTexto = ({label, placeHolder, obrigatorio, valor, aoAlterado}) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
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