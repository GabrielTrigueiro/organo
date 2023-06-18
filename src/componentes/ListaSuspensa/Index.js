import './ListaSuspensa.css'

const ListaSupsensa = ({ label, itens, obrigatorio, valor, aoAlterado }) => {

  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select
        onChange={evento => aoAlterado(evento.target.value)}
        value={valor}
        required={obrigatorio}>
        <option value={""}></option>
        {itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  );
}

export default ListaSupsensa;