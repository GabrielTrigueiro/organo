import './CampoTexto.css'

const CampoTexto = ({label, placeHolder}) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input placeholder={placeHolder}/>
    </div>
  );
}
 
export default CampoTexto;