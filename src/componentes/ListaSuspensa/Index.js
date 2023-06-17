import './ListaSuspensa.css'

const ListaSupsensa = ({label, itens}) => {
  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select>
        {itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  );
}
 
export default ListaSupsensa;